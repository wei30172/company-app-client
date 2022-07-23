import "./ScrollBtn.scss";

type Props = {
  handleScrollTop: () => void;
};

const ScrollBtn: React.FC<Props> = ({ handleScrollTop }) => (
  <div className="scroll-btn">
    <div className="scroll-btn_icon" onClick={handleScrollTop}>
      <i className="scroll-btn_icon_arrow-up"></i>
    </div>
  </div>
);

export default ScrollBtn;
