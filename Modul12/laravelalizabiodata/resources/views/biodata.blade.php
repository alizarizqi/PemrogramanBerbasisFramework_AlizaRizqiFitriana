<!DOCTYPE html>
<html lang="en-US">
<aside class="profile-card">
  <div class="mask-shadow"></div>
  <header>

    <a>
      <img src="pkl3.jpg" width="30" height="10">
    </a>
    <h1>PROFILE</h1>

    <h2>TI-3F/1841720108</h2>
    <style>
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400,600,700,800);
        body{
        background-color: #f5f5f5;
        padding: 120px 0;
        font-family: 'Open Sans', sans-serif;
        }
        img{
            margin-bottom: 20px;
        max-width:100%;
        height:100%;
        }
        .profile-card{
        position:relative;
        width:280px;
        margin:0 auto;
        padding:40px 30px 30px;
        background:#fff;
        border: 5px solid rgba(255,255,255,.7);
        text-align:center;
        border-radius:4px;
        transition: all 200ms ease;
        }
        .mask-shadow{
        z-index:-1 !important;
        width:95%;
        height:12px;
        background:#000;
        bottom:0;
        left:0;
        right:0;
        margin:0 auto;
        position:absolute;
        border-radius:4px;
        opacity:0;
        transition: all 400ms ease-in;
        }
        .profile-card:hover{
        box-shadow: 0px 30px 60px -5px rgba(55,55,71,0.3);
        transform: translate3d(0,-5px,0);
        .mask-shadow{
            opacity:1;
            box-shadow: 0px 30px 60px -5px rgba(55,55,71,0.3);
            position:absolute;
        }
        }
        .profile-card header{
        display:block;
        margin-bottom:10px;
        }
        .profile-card header a{
        width:150px;
        height:150px;
        display:block;
        border-radius:100%;
        margin:-120px auto 0;
        box-shadow: 0 0 0 5px #82b541;
        }
        .profile-card header a img{
        border-radius: 50%;
        width:150px;
        height:150px;
        }

        .profile-card:hover header a, .profile-card header a:hover{
        animation: bounceOut .4s linear; 
        -webkit-animation: bounceOut .4s linear;
        }
        .profile-card header h1{
        font-size:20px;
        color:#444;
        text-transform:uppercase;
        margin-bottom:5px;
        }
        .profile-card header h2{
        font-size:14px;
        color:#acacac;
        text-transform:uppercase;
        margin:0;
        }
        /*content*/
        .profile-bio{
        font-size:14px;
        color:#a5a5a5;
        line-height:1.7;
        font-style: bold;
        margin-bottom:30px;
        }
        /*link social*/
        .profile-social-links{
        margin:0;
        padding:0;
        list-style:none;
        }
        .profile-social-links li{
        display: inline-block;
        margin: 0 10px;
        }
        .profile-social-links li a{
        width: 55px;
        height:55px;
        display:block;
        background:#f1f1f1;
        border-radius:50%;
        -webkit-transition: all 2.75s cubic-bezier(0,.83,.17,1);
            -moz-transition: all 2.75s cubic-bezier(0,.83,.17,1);
            -o-transition: all 2.75s cubic-bezier(0,.83,.17,1);
            transition: all 2.75s cubic-bezier(0,.83,.17,1);
        transform-style: preserve-3d;
        }
        .profile-social-links li a img{
        width:35px;
        height:35px;
        margin:10px auto 0;
        }
        .profile-social-links li a:hover{
        background:#ddd;
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        }
        /*animation hover effect*/
        @-webkit-keyframes bounceOut {
        0% {
            box-shadow: 0 0 0 4px #82b541;
            opacity: 1;
        }
        25% {
            box-shadow: 0 0 0 1px #82b541;
            opacity: 1;
        }
        50% {
            box-shadow: 0 0 0 7px #82b541;
            opacity: 1;
        }
        75% {
            box-shadow: 0 0 0 4px #82b541;
            opacity: 1;
        }
        100% {
            box-shadow: 0 0 0 5px #82b541;
            opacity: 1;
        }
        }
        @keyframes bounceOut {
        0% {
            box-shadow: 0 0 0 6px #82b541;
            opacity: 1;
        }
        25% {
            box-shadow: 0 0 0 2px #82b541;
            opacity: 1;
        }
        50% {
            box-shadow: 0 0 0 9px #82b541;
            opacity: 1;
        }
        75% {
            box-shadow: 0 0 0 3px #82b541;
            opacity: 1;
        }
        100% {
            box-shadow: 0 0 0 5px #82b541;
            opacity: 1;
        }
        }
        </style>

  </header>
  <body>

  <!-- bit of a bio; who are you? -->
  <div class="profile-bio">

    <p>Name     : Aliza Rizqi Fitriana</p>
    <p>Address  : Rawisari Street, Malang</p>
    <p>Birthdate: January 6th, 2001</p>
    <p>Major    : Information Technology</p>

  </div>

  <ul class="profile-social-links">
    <li>
      <a href="https://twitter.com/alijulll">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg">
      </a>
    </li>

  </ul>

</aside>
</body>

</html>