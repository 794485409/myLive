/**
 * Created by Administrator on 2016/4/13.
 */
$(".submitApc").click(function(e) {
    var tipId = "headerTip";
    var poster = $.trim($("#apcPoster").val());
    var apcBoolean = false;
    if(poster == "") {
        alertMsg("请输入封面图地址",tipId,"danger");
        apcBoolean = false;
    } else {
        if(poster.length < 5) {
            alertMsg("封面图长度需大于5",tipId,"danger");
            apcBoolean = false;
        } else {
            apcBoolean = true;
        }
    }
    if(apcBoolean == true ) {
        $.ajax({
            type:'post',
            url:'/myupgrade',
            data:$("#apcContent").serialize()
        }).done(function(results) {
            switch (results.success) {
                case 1:
                    alertMsg("申请成功",tipId,"success");
                    location.reload();
                    break;
                case 0:
                    alertMsg("重复申请！",tipId,"danger");
                    location.reload();
                    break;
                default :
                    alertMsg("这是啥情况！",tipId,"warning");
            }
        })
    }
})