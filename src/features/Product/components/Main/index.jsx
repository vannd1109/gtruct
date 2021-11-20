import MainHeader from "../../../../components/MainHeader";
import MainBody from "../../../../components/MainBody";

function Main({ title }) {
  return (
    <div className="main border">
      <MainHeader title={title} />
      <MainBody />
    </div>
  );
}

export default Main;
