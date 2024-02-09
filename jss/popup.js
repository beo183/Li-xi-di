
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='N';
a[2]='ă';
a[3]='m';
a[4]=' ';
a[5]='m';
a[6]='ớ';
a[7]='i';
a[8]=' ';
a[9]='c';
a[10]='h';
a[11]='ú';
a[12]='c';
a[13]=' ';
a[14]='M';
a[15]='ầ';
a[16]='y';
a[17]=' ';
a[18]='m';
a[19]='a';
a[20]='y';
a[21]=' ';
a[22]='m';
a[23]='ắ';
a[24]='n';
a[25]='';
a[26]='♥';
a[28]='! ';
a[29]='!';
a[30]='!';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>CHÒI OI CẢM ƠN NHIỀU NHAAAAAAA</h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥CẢM ƠN MỘT LẦN NỮA NHÁ </p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>LỠ LÌ XÌ RỒI THÌ NHẬN THOAII EHE</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				