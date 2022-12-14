# AWS-Rekognition-FE

<h2>FRONTEND PROJECT AMAZON REKOGNITION:</h2>
<h3>THÀNH VIÊN</h3>
<p>- Nguyễn Minh Toàn 20110577</p>
<p>- Trần Thế Kiệt 20110055</p>
<p>- Huỳnh Trung Nhân 20110532</p>
<h3>HƯỚNG DẪN SỬ DỤNG</h3>
<h4>Samples...</h4>
<p>{PORT}: 3000</p>
<p>{URL}: localhost:3000</p>
<p>{URL}: localhost:3000/setCLI: trang nhập AWS CLI</p>
<p>{URL}: localhost:3000/signin: trang đăng nhập vào home hoặc admin thông qua chụp ảnh, gởi ảnh lên S3 và so sánh ảnh</p>
<p>{URL}: localhost:3000/home: trang home cho user không có chức vụ admin</p>
<p>{URL}: localhost:3000/admin: trang home cho user có chức vụ admin</p>
<p>scripts: npm start</p>
<h4>API Routes...</h4>
<table>
  <thead>
    <tr>
      <td>STT</td>
      <td>Chức năng</td>
      <td>Mô tả</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Phát hiện vật thể</td>
      <td>Phát hiện các vật thể, bối cảnh, hành động và hiển thị số % chính xác</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Phát hiện văn bản</td>
      <td>Tự động phát hiện văn bản và trích xuất chúng ra từ ảnh của bạn</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Phát hiện gương mặt</td>
      <td>Lấy dữ liệu phân tích về các thuộc tính trên gương mặt và số % chính xác</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Nhận diện người nổi tiếng</td>
      <td>Nhận diện những người nổi tiếng trong hình ảnh và số % chính xác</td>
    </tr>
    <tr>
      <td>5</td>
      <td>So sánh các gương mặt</td>
      <td>So sánh các gương mặt trong 2 bức hình được truyền vào</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Kiểm duyệt</td>
      <td>Kiểm duyệt nội dung</td>
    </tr>
  </tbody>
</table>
<h4>Steps...</h4>
<p>Truy cập vào trang {URL} với {PORT}</p>
<p>Nhập AWS CLI</p>
<p>Qua trang signin, chụp ảnh rồi upload lên S3. Sau khi up thành công thì đăng nhập</p>
<p>Nếu là admin sẽ vào trang admin rồi có thể thêm user hoặc xóa user</p>
<p>Nếu không là admin sẽ vào trang home sử dụng các tính năng của Rekognition</p>
<h4>Credits...</h4>
<p>1. Cách gắn API: https://console.aws.amazon.com/rekognition/home?region=us-east-1#/</p>
