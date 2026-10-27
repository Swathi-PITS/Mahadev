/* ===== EDIT THESE ===== */
var HOSPITAL={name:"Mahadeve Multi Speciality Hospital",short:"Mahadeve Hospital",
phone:"+91 00000 00000",tel:"+910000000000",wa:"910000000000",
timings:"Mon - Sat: 9:00 AM - 8:00 PM",email:"info@example.com"};
/* ====================== */
var pages=[["index.html","Home"],["about.html","About Us"],["doctors.html","Doctors"],["services.html","Services"],["contact.html","Contact"]];
var cur=location.pathname.split("/").pop()||"index.html";
var links=pages.map(function(p){return '<li class="nav-item"><a class="nav-link'+(p[0]==cur?' active':'')+'" href="'+p[0]+'">'+p[1]+'</a></li>'}).join("");
document.getElementById("hdr").innerHTML=
'<div class="topbar py-2 d-none d-md-block"><div class="container d-flex justify-content-between"><span><i class="bi bi-geo-alt-fill me-1"></i>Near New Bus Stand, Achampet, Nagarkurnool District</span><span><i class="bi bi-telephone-fill me-1"></i><a href="tel:'+HOSPITAL.tel+'">'+HOSPITAL.phone+'</a> &nbsp;|&nbsp; <i class="bi bi-clock me-1"></i>'+HOSPITAL.timings+'</span></div></div>'+
'<nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top"><div class="container"><a class="navbar-brand" href="index.html"><i class="bi bi-hospital-fill me-2"></i>'+HOSPITAL.short+'</a><button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="nav"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">'+links+'<li class="nav-item ms-lg-2"><a class="btn btn-brand" href="contact.html#appointment">Book Appointment</a></li></ul></div></div></nav>';
document.getElementById("ftr").innerHTML=
'<footer class="pt-5 pb-3"><div class="container"><div class="row g-4"><div class="col-md-4"><h5 class="text-white"><i class="bi bi-hospital-fill me-2"></i>'+HOSPITAL.short+'</h5><p class="small">Surgery, laparoscopy, women\'s surgical care, dentistry and cosmetic care in Achampet.</p></div><div class="col-6 col-md-2"><h6 class="text-white">Links</h6><ul class="list-unstyled small">'+pages.map(function(p){return '<li><a href="'+p[0]+'">'+p[1]+'</a></li>'}).join("")+'</ul></div><div class="col-6 col-md-3"><h6 class="text-white">Doctors</h6><ul class="list-unstyled small"><li>Dr. L. Mahesh, Surgeon</li><li>Dr. L. Pavani, Dentist</li></ul></div><div class="col-md-3"><h6 class="text-white">Contact</h6><p class="small mb-1">Near New Bus Stand, Achampet, Nagarkurnool District</p><p class="small mb-0">'+HOSPITAL.phone+'</p></div></div><hr style="border-color:#1d4a4a"><p class="text-center small mb-0">&copy; '+new Date().getFullYear()+' '+HOSPITAL.name+'. All rights reserved.</p></div></footer><a class="wa" href="https://wa.me/'+HOSPITAL.wa+'" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>';
var f=document.getElementById("apt");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var g=function(i){return document.getElementById(i).value};
var t="Appointment request\nName: "+g("n")+"\nPhone: "+g("p")+"\nDoctor: "+g("d")+"\nDate: "+g("dt")+"\nMessage: "+g("m");
window.open("https://wa.me/"+HOSPITAL.wa+"?text="+encodeURIComponent(t),"_blank")});
