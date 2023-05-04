/**
 * From https://github.com/jaredpalmer/react-simple-infinite-scroll
 * Updated to accept a scroll container React ref as the "window"
 */
import * as React from 'react';
import throttleFn from 'lodash/throttle';

function onContainerScroll(_ref) {
  var hasMore = _ref.hasMore,
      isLoading = _ref.isLoading,
      onLoadMore = _ref.onLoadMore,
      scrollContainerNode = _ref.scrollContainerNode,
      sentinelRef = _ref.sentinelRef,
      threshold = _ref.threshold,
      useWindow = _ref.useWindow;
  if (isLoading || !hasMore) return;
  if (sentinelRef.current === null) return;

  var _sentinelRef$current$ = sentinelRef.current.getBoundingClientRect(),
      sentinelTop = _sentinelRef$current$.top;

  if (useWindow) {
    if (sentinelTop - window.innerHeight < threshold) {
      onLoadMore();
    }
  } else {
    if (!scrollContainerNode) return;

    var _scrollContainerNode$ = scrollContainerNode.getBoundingClientRect(),
        containerBottom = _scrollContainerNode$.bottom;

    if (sentinelTop - containerBottom < threshold) {
      onLoadMore();
    }
  }
}

function InfiniteScroll(_ref2) {
  var children = _ref2.children,
      hasMore = _ref2.hasMore,
      isLoading = _ref2.isLoading,
      onLoadMore = _ref2.onLoadMore,
      scrollContainerNode = _ref2.scrollContainerNode,
      _ref2$threshold = _ref2.threshold,
      threshold = _ref2$threshold === void 0 ? 100 : _ref2$threshold,
      _ref2$throttle = _ref2.throttle,
      throttle = _ref2$throttle === void 0 ? 64 : _ref2$throttle,
      _ref2$useWindow = _ref2.useWindow,
      useWindow = _ref2$useWindow === void 0 ? false : _ref2$useWindow;
  var sentinelRef = React.useRef(null);
  React.useEffect(function () {
    var params = {
      hasMore: hasMore,
      isLoading: isLoading,
      onLoadMore: onLoadMore,
      scrollContainerNode: scrollContainerNode,
      sentinelRef: sentinelRef,
      threshold: threshold,
      useWindow: useWindow
    };
    var scrollHandler = throttleFn(function () {
      return onContainerScroll(params);
    }, throttle);
    var resizeHandler = throttleFn(function () {
      return onContainerScroll(params);
    }, throttle);
    var container = useWindow ? window : scrollContainerNode;

    if (container) {
      container.addEventListener('scroll', scrollHandler);
      container.addEventListener('resize', resizeHandler);
    } // loads more content until page becomes scrollable, or until there is no more data to fetch


    onContainerScroll(params);
    return function removeEventListeners() {
      if (container) {
        container.removeEventListener('scroll', scrollHandler);
        container.removeEventListener('resize', resizeHandler);
      }
    };
  }, [hasMore, isLoading, onLoadMore, scrollContainerNode, sentinelRef, threshold, throttle, useWindow]);
  return React.createElement("div", null, children, React.createElement("div", {
    ref: sentinelRef,
    "data-testid": "sentinel"
  }));
}

export default InfiniteScroll;
//# sourceMappingURL=InfiniteScroll.js.map