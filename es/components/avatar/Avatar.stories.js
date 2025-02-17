import * as React from 'react';
import IconVerified from '../../icons/general/IconVerified';
import IconTaskGeneral from '../../icons/two-toned/IconTaskGeneral';
import IconAnnotation from '../../icons/two-toned/IconAnnotation';
import Avatar from './Avatar';
import notes from './Avatar.stories.md';
export var regular = function regular() {
  return React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie"
  });
};
export var small = function small() {
  return React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    size: "small"
  });
};
export var large = function large() {
  return React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    size: "large"
  });
};
export var withAvatarUrl = function withAvatarUrl() {
  return React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    avatarUrl: "data:image/jpeg;base64,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"
  });
};
export var withUrlFallbackToInitials = function withUrlFallbackToInitials() {
  return React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    avatarUrl: "garbage"
  });
};
export var markedAsExternal = function markedAsExternal() {
  return React.createElement("div", null, React.createElement(Avatar, {
    id: 1,
    shouldShowExternal: true,
    name: "Aaron Levie",
    isExternal: true,
    size: "large"
  }), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    shouldShowExternal: true,
    isExternal: true,
    avatarUrl: "data:image/jpeg;base64,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"
  }), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    shouldShowExternal: true,
    name: "Aaron Levie",
    isExternal: true,
    size: "small"
  }));
};
export var withBadges = function withBadges() {
  return React.createElement("div", null, React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    badgeIcon: React.createElement(IconTaskGeneral, null),
    size: "large"
  }), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    badgeIcon: React.createElement(IconTaskGeneral, null)
  }), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    badgeIcon: React.createElement(IconTaskGeneral, null),
    size: "small"
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    badgeIcon: React.createElement(IconAnnotation, null),
    size: "large"
  }), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    badgeIcon: React.createElement(IconAnnotation, null)
  }), React.createElement("br", null), React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie",
    badgeIcon: React.createElement(IconAnnotation, null),
    size: "small"
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Avatar, {
    badgeIcon: React.createElement(IconVerified, {
      className: "completed",
      title: "Verified user"
    }),
    id: 1,
    name: "Aaron Levie",
    size: "large"
  }), React.createElement("br", null), React.createElement(Avatar, {
    avatarUrl: "data:image/jpeg;base64,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",
    badgeIcon: React.createElement(IconVerified, {
      className: "completed",
      title: "Verified user"
    }),
    id: 1,
    name: "Aaron Levie"
  }), React.createElement("br", null), React.createElement(Avatar, {
    badgeIcon: React.createElement(IconVerified, {
      className: "completed",
      title: "Verified user"
    }),
    id: 1,
    name: "Aaron Levie",
    size: "small"
  }));
};
export var withMultipleAvatars = function withMultipleAvatars() {
  return React.createElement("div", null, React.createElement(Avatar, {
    id: 1,
    name: "Aaron Levie"
  }), React.createElement(Avatar, {
    id: 2,
    name: "Front End (example.com)"
  }), React.createElement(Avatar, {
    id: 3,
    name: "Redwood City"
  }));
};
export var withoutNameOrInitials = function withoutNameOrInitials() {
  return React.createElement(Avatar, null);
};
export default {
  title: 'Components|Avatar',
  component: Avatar,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Avatar.stories.js.map