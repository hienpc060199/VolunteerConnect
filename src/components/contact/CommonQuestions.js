import React from "react";
import "./CommonQuestions.css";
import Question from "./Question";

const CommonQuestions = () => {
  return (
    <div className="commonQuestions">
      <div className="cq--headline">
        Trước khi gửi tin nhắn cho chúng tôi đây là những điều bạn nên biết
      </div>
      <div className="cq--questions_container">
        <Question
          question={"Sứ mệnh của KindnessConnect là gì?"}
          answer={
            "Sứ mệnh của Kindness Connect là truyền cảm hứng, thúc đẩy và trao quyền cho các cá nhân tham gia vào những phong trào thiện nguyện cho cộng đồng tại Việt Nam. Từ đó, chúng tôi hy vọng có thể tạo nên một cộng đồng với những con người luôn sẵn sàng giúp đỡ lẫn nhau."
          }
        />
        <Question
          question={"KindnessConnect hoạt động trên lĩnh vực nào?"}
          answer={
            "Green Env hoạt động trên lĩnh vực Từ thiện-kêu gọi quyên góp và dùng những số tiền ấy để đóng góp cho những người đang thật sự cần sự giúp đỡ, và lĩnh vực Giáo dục - tuyên truyền, gợi cảm hứng cho mỗi người góp phần quan tâm đến cộng đồng xung quanh mình và tích cực tham gia vào các hoạt động thiện nguyện."
          }
        />
        <Question
          question={"KindnessConnect là tên viết tắt của những chữ cái nào?"}
          answer={
            "KindnessConnect chính là ghép lại của Kindness và Connect.Nó có nghĩa là kết nối yêu thương.Chúng tôi đã chọn cái tên này vì nó đúng với những gì mà chúng tôi hướng đến:lan tỏa yêu thương và kết nối mọi người với nhau."
          }
        />
        <Question
          question={
            "Làm thế nào để bạn có thể tham gia?"
          }
          answer={
            "Nếu là một ngườico1 mong muốn đóng góp cho cộng đồng, bạn có thể tạo tài khoản và tham gia vào các hoạt động của chúng tôi (Bấm vào 'Nhiệm vụ' để biết rõ hơn về chi tiết các hoạt động). Nếu là một doanh nghiệp hoặc tổ chức, bạn có thể yêu cầu hợp tác với chúng tôi qua Email hoặc biểu mẫu bên dưới."
          }
        />
        <Question
          question={"Tại sao KindnessConnect cần sự đóng góp từ bạn?"}
          answer={`Sứ mệnh của Green Env là bảo vệ môi trường và truyền cảm hứng bảo vệ môi trường đến với thật nhiều người. Vì thế, sự tham gia của bạn có ý nghĩa rất lớn đối với chúng tôi. Dù cho đó là quyên góp tiền, tham gia nhiệm vụ, hay giới thiệu website này tới bạn bè, thì mọi sự đóng góp của bạn đều được chúng tôi vô cùng trân quý.`}
        />
        <Question
          question={"Tiền đóng góp sẽ được KindnessConnect sử dụng thế nào?"}
          answer={
            "Trước tiên,tiền đóng góp sẽ được chúng tôi dùng để quyên góp cho cá nhân hay các dự án từ thiện lớn hơn theo nguyện vọng của bạn.Ngoài ra,KindnessConnect sẽ dùng tiền quyên góp của các bạn để bảo trì web hoặc mua thêm các phần thưởng cho tình nguyện viên tham gia nhiệm vụ, tạo niềm vui để các bạn tích cực tham gia."
          }
        />
        <Question
          question={"Tôi có thể đóng góp cho KindnessConnect bằng cách nào?"}
          answer={
            "Các bạn có thể tham gia nhiệm vụ với tư cách tình nguyện viên của chúng tôi. Bạn cũng có thể quyên góp từ thiện cho chúng tôi và nhận được quyền truy cập những thông tin mới nhất của dự án."
          }
        />
        {/* <Question
          question={"Tôi có thể đóng góp cho Env bằng cách nào?"}
          answer={
            "Các bạn có thể tham gia nhiệm vụ với tư cách tình nguyện viên của chúng tôi. Bạn cũng có thể quyên góp từ thiện cho chúng tôi và nhận được quyền truy cập những thông tin mới nhất của dự án."
          }
        /> */}
      </div>
    </div>
  );
};

export default CommonQuestions;
