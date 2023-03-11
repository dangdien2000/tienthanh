function fn_ScreenChange(scr_1, scr_2, scr_3, scr_4, scr_5, scr_6, scr_7){
    document.getElementById(scr_1).style.visibility = 'visible';
    document.getElementById(scr_2).style.visibility = 'hidden';
    document.getElementById(scr_3).style.visibility = 'hidden';
    document.getElementById(scr_4).style.visibility = 'hidden';
    document.getElementById(scr_5).style.visibility = 'hidden';
    document.getElementById(scr_6).style.visibility = 'hidden';
    document.getElementById(scr_7).style.visibility = 'hidden';
}

// Hàm chức năng ghi giá trị tag
function setTag(tag,val) {
    var tag_Link = '"Web_Conn".' + tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    $.post(url, sdata, function (result2) { });
}
 
var pos3 = new JustGage({
    id: "pos3",
    value: 0,
    min: 0,
    max: 1500,
    title: "Speed",	
    //label: "RPM",	
    //levelColors: ["#00fff6","#ff00fc","#1200ff"],				
    textRenderer: customValue,
    titleFontColor: "red",				
    valueFontColor: "blue",
    labelFontColor: "black"				
    });
// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
        pos3.refresh(result["temCon"].trim());
    });
}



// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    // IO Field - Màn hình chính (Actual value)
    
    IOField("tbx_driCon", "driCon");
    IOField("pos3", "pos3"); 
    //IOField("tbx_temCon", "temCon"); 
    IOField("tbx_hzzCon", "hzzCon"); 
    IOField("tbx_hrsCon", "hrsCon"); 
    IOField("tbx_anaCon", "anaCon"); 
    IOField("tbx_modCon", "modCon"); 
    IOField("tbx_metCon", "metCon");
    IOField("tbx_lit", "lit");
    IOField("tbx_tim", "tim");
    IOField("valueInt[0]", "valueInt[0]");
    IOField("valueInt[1]", "valueInt[1]");
    IOField("value[2]", "value[2]");
    IOField("value[3]", "value[3]");
    IOField("value[4]", "value[4]");

   
    var d = new Date();
    var n = d.toLocaleDateString();
    var m = d.toLocaleTimeString();
    $('#DateNowTime').text(m);
    $('#DateNowDate').text(n);
}, 1000);

function customValue(val) {				
    if (val < 500) {
        return 'low';
    } else if (val <= 1200) {
        return 'normal';
    } else {					
        return 'high';
    }
}				

   

       

// Tag Edit
var tag_Edit_Enable = false;
// Hàm báo đang sửa dữ liệu
function fn_Edditing(){
    fn_DataEdit("btt_Save", "btt_Edit")
    tag_Edit_Enable = true;
    // Enable chức năng IO Field
    document.getElementById("tbx_tag_Bool").disabled = false;
    document.getElementById("tbx_tag_Byte").disabled = false;
    document.getElementById("tbx_tag_Integer").disabled = false;
    document.getElementById("tbx_tag_Real").disabled = false;
    document.getElementById("tbx_tag_String").disabled = false;
}
// Hàm báo đã sửa dữ liệu
function fn_Saving(){
    fn_DataEdit("btt_Edit", "btt_Save")
    tag_Edit_Enable = false;
    // Set giá trị tag
    var tag_Bool_data = document.getElementById("tbx_tag_Bool").value; // Lấy giá trị từ textbox
    var tag_Byte_data = document.getElementById("tbx_tag_Byte").value;
    var tag_Integer_data = document.getElementById("tbx_tag_Integer").value;
    var tag_Real_data = document.getElementById("tbx_tag_Real").value;
    var tag_String_data = document.getElementById("tbx_tag_String").value;
 
    setTag('tag_Bool',tag_Bool_data); // Ghi dữ liệu xuống plc    
    setTag('tag_Byte',tag_Byte_data);    
    setTag('tag_Integer',tag_Integer_data);    
    setTag('tag_Real',tag_Real_data);    
    setTag('tag_String',tag_String_data);
 
    // Disable chức năng IO field
    document.getElementById("tbx_tag_Bool").disabled = true;
    document.getElementById("tbx_tag_Byte").disabled = true;
    document.getElementById("tbx_tag_Integer").disabled = true;
    document.getElementById("tbx_tag_Real").disabled = true;
    document.getElementById("tbx_tag_String").disabled = true;
    alert('Dữ liệu đã được lưu!');
}

