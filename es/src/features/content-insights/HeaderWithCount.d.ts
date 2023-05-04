import './HeaderWithCount.scss';
interface Props {
    title: string;
    totalCount?: number;
}
declare function HeaderWithCount({ title, totalCount }: Props): JSX.Element;
export default HeaderWithCount;
