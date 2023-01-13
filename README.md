# Hello-world-
my first repositry
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/1142f72366.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="img/css2.css?family=Cormorant:ital,wght@1,300&family=Dancing+Script&family=Lobster&family=Pacifico&family=Permanent+Marker&family=Spectral+SC:wght@200&display=swap" rel="stylesheet">
    <style> @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,300&family=Dancing+Script&family=Lobster&family=Pacifico&family=Permanent+Marker&family=Spectral+SC:wght@200&display=swap'); 
    
            *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none; 
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
section{
    padding: 100px 0;
}
section .title{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 40px;
    padding-bottom: 10px;
}
.navbar{
    position: fixed;
    width: 100%;
    padding: 15px 0;
    background-color: rgba(53, 53, 53, 0.938);
    font-family: 'Times New Roman', Times, serif;
    box-shadow: 0 0 3px rgb(19, 19, 19);
    z-index: 999;
}
.navbar .max-width{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo a{
    color: whitesmoke;
    font-size: 35px;
    font-weight: 600;
}
.logo span{
    color: crimson;
}
.navbar .menu li{
    list-style: none;
    display: inline-block;
}
.navbar .menu li a{
    color: white;
    font-size: 20px;
    font-weight: 550;
    margin-left: 25px;
    transition: color 0.3s ease;
}
.navbar .menu li a:hover {
    color: crimson;
}
.home{
    display: flex;
    height: 100vh;
    min-height: 500px;
}
.home img{
    width: 550px;
    height: 500px;
    margin-left: 15%;
    margin-top: 8%;
}
.home .max-width{
    margin: auto 0 auto 40px;
    display: flex;
}
.home .home-content .text1{
    margin-top: 25%;
    font-size: 27px;
    font-family: 'Cormorant', serif;

}
.home .home-content .text2{
    font-family: 'Dancing Script', cursive;
    font-size: 75px;
    font-weight: 550;
    margin-left: -3px;
}
.home .home-content .text3{
    font-size: 25px;
    margin: 5px 0;
    color: rgb(185, 19, 19);
}
.home .home-content a{
    display: inline-block;
    background: rgb(95, 105, 255);
    color: white;
    font-size: 25px;
    padding: 14px 36px;
    margin-top: 30px;
    border-radius: 6px;
    border: 2px solid rgb(95, 105, 255);
    transition: all 0.8s ease;
}
.home .home-content a:hover{
    font-weight: 500;
    background-color: rgb(26, 37, 201);
}
.about .about-content
{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.about .col-left{
    width: 45%;
}
.about .col-right{
    width: 55%;
    padding: 0 60px;
}
.about .col-right .text{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
}
.about p{
    font-size: 20px;
}
.about a{
    display: inline-block;
    background: crimson;
    color: white;
    font-size: 20px;
    padding: 12px 30px;
    margin-top: 30px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.8s ease;
}
.about a:hover{
    font-weight: 500;
    background-color: rgb(160, 14, 43);
}
.about .title{ 
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 30px;
    color: crimson;
}
.about .about-content img{
    height: 400px;
    width:  450px;
    object-fit: cover;
    border-radius: 6px;
    padding: 20px;
}
.skills .skill-content{
    display: flex;
}

.skills .col-left{
    width: 45%;
    padding-right: 20px;
}
.skills .col-right{
    width: 55%;
    padding: 0 60px;
}
.skills .skill-content .text{
    margin-top: 15px;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    color: rgb(168, 14, 45);
}
.skills .skill-content p{
    font-size: 20px;
}
.skills .skill-content .col-right .bars{
    margin-bottom: 45px;
}
.skills .skill-content .col-right .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.skills .skill-content .col-right span{
    font-weight: 500;
    font-size: 18px;
}
.skills .skill-content .col-right .line{
    position: relative;
    margin: 5px 10px ;
    height: 8px;
    width: 100%;
    background-color: lightgray;
}
.skills .skill-content .col-right .line::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 80%;
    left: 0;
    top: 0;
    background: crimson;
}
.skills .skill-content .col-right .html::before{
    width: 90%;
}
.skills .skill-content .col-right .css::before{
    width: 87%;
}
.skills .skill-content .col-right .js::before{
    width: 75%;
}

.contact .contact-content{
    display: flex;
}
.contact .contact-content .right{
    padding-left: 10%;
}
.contact .contact-content .column{
    width: 50%;
}
.contact .contact-content .text{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
}
.contact .left a{
    color: crimson;
    font-weight: 550;
}
.contact .msg { 
    margin-left: 10px;
    font-size: 30px;
    font-weight: 550;
    margin-bottom: 30px;
    color: crimson;
}
.contact .contact-content p{
    text-align: justify;
}
.contact .contact-content .icons{
    margin: 10px 0;
}
.contact .contact-content .row{
    display: flex;
    height: 65px;
    align-items: center;
}
.contact .contact-content .row .info{
    margin-left: 30px;
}
.contact .contact-content .info i{
    font-size: 25px;
}
.contact .contact-content .info .head{
    font-weight: 500;
}
.contact .contact-content .info .sub-title{
    color: rgb(34, 33, 33);
}
.contact .contact-content .right .field{
    height: 45px;
    width: 100%;
    margin-bottom: 15px;
}
.contact .contact-content .right form .textarea{
    height: 80px;
}
.contact .contact-content .right form .name , .email ,.subject , textarea{
    margin-left: 10px;
}
.contact .contact-content .field .input{
    height: 100%;
    width: 100%;
}
.contact .contact-content form .field input ,.contact .contact-content form  textarea{
    height: 100%;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
}
.contact button{
    display: inline-block;
    background-color: rgb(255, 251, 252);
    color: crimson;
    margin-left: 10px;
    font-size: 20px;
    padding: 12px 30px;
    margin-top: 30px;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.8s ease;
}
.contact button:hover{
    font-weight: 500;
    background: crimson;
    color: white;
}
.link a{
    display: block;
    color: blue;
    padding: 0 35%;
    font-size: 25px;
}
.link a:hover{
    color: crimson;
}</style>
</head>
<body>
    <nav class="navbar">
        <div class="max-width">
        <div class="logo"><a href="#">profile <span>site</span></a></div>
        <ul class="menu">
            <li><a href="#home"> Home</a></li>
            <li><a href="#about"> About</a></li>
            <li><a href="#skills"> Skills</a></li>
            <li><a href="#contact"> Contact</a></li>
        </ul>
</div></nav>
<section class="home" id="home">
    <div class="max-width">
        <div class="home-content">
            <div class="text1">Hello, my name is</div>
            <div class="text2">Shifaa Darweesh</div>
            <div class="text3">frontend developer</div>
            
footer{
    background-color: black;
    padding: 18px 35%;
    color: wheat;
}
footer span{
    color: crimson;
}
            <a href="#">Contact me</a>
        </div>
        <div class="pho"><img src="img/photo.webp" alt=""></div>
    </div>
</section>

<section class="about" id="about">
    <div class="max-width">
        <div class="about-content">
            <div class="col-left">
                <img src="img/im.jpg" alt="">
            </div>
            <div class="col-right">
                <h2 class="title">About me</h2>
                <div class="text">Iam a software Engineer and front end developer</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non corrupti earum numquam natus asperiores expedita eum consequuntur quibusdam optio. Nulla consequuntur veritatis obcaecati vel accusamus, fugit qui doloribus ab tempora!</p>
                 <a href="#">Download CV</a>
            </div>
        </div>
    </div>
</section>
<section class="skills" id="skills">
    <div class="max-width">
        <h2 class="title">My Skills</h2>
        <div class="skill-content">
            <div class="col-left">
                <div class="text">My Creative & Experience</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aspernatur dolorum culpa eaque fugiat enim eos necessitatibus dicta aut eius eligendi sunt aliquid ipsam cupiditate perspiciatis, adipisci praesentium cum eveniet.</p>
            </div>
            <div class="col-right">
                <div class="bars">
                    <div class="info">
                        <span>HTML</span>
                        <div class="line html"></div>
                        <span>90%</span>                        
                    </div>
                </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <div class="line css"></div>
                            <span>87%</span>                           
                        </div>
                    </div>
                        <div class="bars">
                            <div class="info">
                                <span>JAVASCRIPT</span>
                                <div class="line js"></div>
                                <span>75%</span>                               
                            </div>
                        </div>
            </div>
        </div>
    </div>
</section>
<section id="contact" class="contact">
    <div class="max-width">
        <div class="title">Contact me</div>
        <div class="contact-content">
            <div class="column left">
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, numquam aspernatur voluptatum soluta in suscipit accusamus quod nesciunt eaque et iusto qui neque repellat! Ipsa iure nobis a necessitatibus nemo.</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fa-solid fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Shifaa Darweesh</div>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <div class="row">
                            <i class="fa-solid fa-location-dot"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Palestine -Gaza-</div>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <div class="row">
                            <i class="fa-solid fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">shoshoshifaa306@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <div class="row">
                            <i class="fa-solid fa-phone"></i>
                            <div class="info">
                                <div class="head">Phone Number</div>
                                <div class="sub-title">0592774017</div>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <div class="row">
                            <i class="fa-solid fa-star"></i>
                            <div class="info">
                                <div class="head">Recent work(game) : Rock✊,paper✋,scissors✌</div>
                                <div class="sub-title"><a href="game.html">Play Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column right">
                <div class=" msg">Message me</div>
                <form action="#">
                    <div class="field">
                        <div class="field name">
                            <input type="text" placeholder="Name">
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email">
                        </div>
                        <div class="field subject">
                            <input type="text" placeholder="Subject">
                        </div>
                        <div class="field text-area">
                            <textarea name="" id="" cols="30" rows="10" placeholder="describe project"></textarea>
                             </div>
                             <button class="submit">send message</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</section>
<div class="link">
    <a href="https://github.com/Shifaa-Mahmoud/Hello-world-">visit my account in github</a>
    <a href="https://www.codewars.com/users/Shifaa-Mahmoud">visit my account in codwars</a>
    <a href="https://www.freecodecamp.org/fcc81380367-038b-4986-b250-779eb652a083">visit my account in code camp</a>
</div>

<footer>Created by <span>Shifaa </span>| <i class="fa-regular fa-copyright"></i> 2023 All rights reserved</footer>
</body>
</html>
