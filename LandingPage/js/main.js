$(document).ready(function () {

  for (let i = 1; i <= 3; i++){
    for (let j = 1; j <=3; j++) {
      $(".parent").append(
        ` <div class="myCard">
          <img src="./img/img/blog-${j}.png" alt="">
          <span>19 August, 2022</span>
          <p>6 plans to workout at home during Covid pandemic</p>
      </div>
       `
      );
    }
  }

  $(".myCard").fadeOut();

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 100) {
      console.log("if true", "Scroll position: ", y);
        $(".myCard").fadeOut(1000);
    } else {
      console.log("if false", "Scroll position: ", y);
        $(".myCard").fadeIn(1000);
    }
  });

  $(".myCard").click(function(){
    let modal = $(".myModal");
    let imgSource = $(this)[0].children[0].src;
    modal[0].children[0].src = imgSource;
    modal.css("display","block");
    $(".fadeBackground").css("display","block");
  });
  $(".closeBtn").click(function(){
    $(".myModal").css("display","none");
    $(".fadeBackground").css("display","none");
  });
  $(".fadeBackground").click(function(){
    $(".myModal").css("display","none");
    $(".fadeBackground").css("display","none");
  });
});