var currentTarget = null;
function GetNewId() {
    var newid = parseInt($('#mainContent').attr("tcount")) + 1;
    $('#mainContent').attr("tcount", newid);
    return newid;
}

function freshContainers() {
    var value = $("#Select1 option:selected").val();

    $(".containerSelected").removeClass("containerSelected");
    $("#Select1 option").remove();
    $("#Select1").append("<option value=''></option>")
    $("#mainContent").find('*[role="tablist"],*[role="acclist"],*[role="table"]').each(function (idx, el) {
        $("#Select1").append("<option value='" + $(el).attr("id") + "'>" + $(el).data("usage") + "</option>")
    });
    $("#Select1").val(value);


    if ($('#' + value).attr("role") == "acclist") {
        $("#" + value).addClass('containerSelected')
    }
    else {
        $("#" + value).next().addClass("containerSelected").end().addClass('containerSelected')
    }

}

function DropContainers(from, to) {
    to.droppable({
        accept: from,
        onDragEnter: function (e, source) {
            $('.eleHover').removeClass("eleHover")
            $(this).addClass('eleHover');
            currentTarget = $(this);
            console.log(currentTarget)
            e.stopPropagation()
        },
        onDragLeave: function (e, source) {
            $(this).removeClass("eleHover")
            $(currentTarget).removeClass("eleHover")
            e.stopPropagation()
        },
        onDrop: function (e, source) {
            GetNewId();
            $('.eleHover').removeClass("eleHover")
            var ntType = $(source).attr('ntType');
            var desDiv = "";
            
            var html = $(this).html();

            if (html.trim()) {
                    switch (ntType) {
                        case "detabs":
                            if (confirm("确定要覆盖当前控件吗?")) {
                                ShowdetabsDia();
                            }
                            //currentTarget = $(this);
                            break;
                        case "detables":
                            if (confirm("确定要覆盖当前控件吗?")) {
                                ShowdetablesDia();
                            }
                            //currentTarget = $(this);
                            break;
                        case "decolls":
                            if (confirm("确定要覆盖当前控件吗?")) {
                                ShowdecollsDia();
                            }
                            //currentTarget = $(this);
                            break;
                        default:
                            break;
                    }
            }
            else {
                switch (ntType) {
                    case "detabs":
                        ShowdetabsDia();
                        //currentTarget = $(this);
                        break;
                    case "detables":
                        ShowdetablesDia();
                        //currentTarget = $(this);
                        break;
                    case "decolls":
                        ShowdecollsDia();
                        //currentTarget = $(this);
                        break;
                    default:
                        break;
                }
            }
            e.stopPropagation()
        }
    });
}

function ShowdetabsDia() {
    $("#tabitemTable tbody tr").remove();
    $('#detabsDia').modal()
}

function ShowdetablesDia() {
    document.getElementById("itemform").reset();
    $('#detablesDia').modal()
}

function ShowdecollsDia() {
    $('#collitemTable tbody tr').remove();
    $('#decollsDia').modal();
    
}


function DropEles(from, to) {
    to.droppable({
        accept: from,
        onDragEnter: function (e, source) {
            $(this).css('border', 'dotted 5px #ccc');
        },
        onDragLeave: function (e, source) {
            $(this).css('border', 'solid 1px #ddd');
        },
        onDrop: function (e, source) {
            $(this).css('border', 'solid 1px #ddd');
            var ntType = $(source).attr('ntType');
            var desDiv = desDiv || "";
            var model1 = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"  ></div><div class="form-group"><div><label style="margin-top:10px" class="col-sm-4 control-label" for="#0">#2</label><div class="col-sm-8"><input class="form-control" placeholder=""  id="#0" name="#0" type="#1" /></div></div></div></div>';
            var model2 = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"  ></div><div class="form-group"><div><input  class="btn btn-primary" id="#0" name="#0" type="#1" value="#2" /></div></div></div>';
            var model3 = '<div data-type="#9" class="wrapper"><div class="delete"  style="display:none"  ></div><div class="form-group"><div><label  style="margin-top:10px" class="col-sm-4 control-label">#2</label><div class="col-sm-8"><select class="form-control"  id="#0" name="#0"><option>请选择...</option></div></div></div></div>';
            var model4 = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"  > </div><div class="form-group"><div><label  style="margin-top:10px" class="col-sm-4 control-label" for="#0">#2</label><div class="col-sm-8"><input  id="#0" type= "radio" name="#0"/></div></div></div></div>';
            var model5 = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"  ></div><div class="form-group"><div><label  style="margin-top:10px" class="col-sm-2 control-label">#1</label><div class="col-sm-10"><textarea class="form-control"  id="#0" name="#0" rows="3" cols="20"></textarea></div></div></div></div>';
            var model6 = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"></div><div class="form-group"><div><label  style="margin-top:10px" class="col-sm-2 control-label">#1</label><div class="col-sm-10"><table  class="table table-bordered" id="#0" name="#0"><thead><tr><th>列1</th><th>列1</th></tr></thead><tbody><tr><td>1</td><td>2</td></tr><tr><td>1</td><td>2</td></tr></tbody></table></div></div></div></div>';
            var model7 = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"  ></div><div class="form-group"><div><label  style="margin-top:10px" class="col-sm-4 control-label" for="#0">#2</label><div class="col-sm-8"><input    id="#0" name="#0" type="#1" /></div></div></div></div>';

            var modeldatetime = '<div data-type="#9" class="wrapper"><div class="delete" style="display:none"  ></div><div class="form-group"><div><label style="margin-top:10px" class="col-sm-4 control-label" for="#0">#2</label><div class="col-sm-8"><input class="form-control"  id="#0" name="#0" type="#1" /></div></div></div></div>';
            switch (ntType) {
                case "radio":
                    desDiv = model4.replace(/#0/g, "nt" + GetNewId()).replace(/#2/g, "请选择")
                        .replace(/#9/g, "5")
                    break;
                case "textarea":
                    desDiv = model5.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "请输入一段文本")
                        .replace(/#9/g, "9")
                    break;

                case "reset":
                    desDiv = model2.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "reset").replace(/#2/g, "重置")
                        .replace(/#9/g, "14")
                    break;

                case "deliver":
                    desDiv = model2.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "reset").replace(/#2/g, "转派")
                        .replace(/#9/g, "12")
                    break;

                    

                case "submit":
                    desDiv = model2.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "submit").replace(/#2/g, "提交")
                        .replace(/#9/g, "13")
                    break;
                case "text":
                    desDiv = model1.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "text").replace(/#2/g, "请输入")
                        .replace(/#9/g, "1")
                    break;

                case "datetime":
                    desDiv = model1.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "text").replace(/#2/g, "请选择日期")
                        .replace(/#9/g, "3")
                    .replace(/placeholder=""/g, 'placeholder="这里是日期控件"')
                    break;

                case "checkbox":
                    desDiv = model7.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "checkbox").replace(/#2/g, "是否选中")
                        .replace(/#9/g, "6") 
                      
                    break;

                case "password":
                    desDiv = model1.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "password").replace(/#2/g, "请输入密码")
                        .replace(/#9/g, "11")
                    break;
                case "select":
                    desDiv = model3.replace(/#0/g, "nt" + GetNewId()).replace(/#2/g, "请选择")
                        .replace(/#9/g, "4")
                    break;
                case "file":
                    desDiv = model1.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "file").replace(/#2/g, "请上传")
                        .replace(/#9/g, "7")
                    break;
                case "table":
                    desDiv = model6.replace(/#0/g, "nt" + GetNewId()).replace(/#1/g, "表格展示")
                        .replace(/#9/g, "8")
                    break;
                default:
                    break;
            }
            var html = $(this).html();

            if (html.trim()) {
                if (confirm("确定要覆盖当前控件吗?")) {
                    $(this).html(desDiv);
                }
                else { }
            }
            else {
                $(this).html(desDiv);
            }

        }
    });
}