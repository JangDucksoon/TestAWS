var main = {
    init : function() {
        var _this = this;
        $('#btn-save').on('click', function() {
            _this.save();
        });

        $("#btn-update").on("click", function() {
            _this.update();
        });

        $("#btn-delete").on("click", function(){
           _this.delete();
        });
    },

    save : function() {
        if (!confirm("정말로 저장하시겠습니까?")) {
            return;
        }

        var data = {
            title : $("#title").val(),
            author : $("#author").val(),
            content: $("#content").val()
        };

        $.ajax({
            type : "POST",
            url : "/api/v1/posts" ,
            dataType : "json" ,
            contentType : "application/json; charset=utf-8",
            data : JSON.stringify(data)
        }).done(function() {
            alert("등록이 완료되었습니다.");
            window.location.href = '/';
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    },

    update : function() {
        var oriTitle = $("#oriTitle").val();
        var oriContent = $("#oriContent").val();

        var data = {
            title : $("#title").val() ,
            author : $("#author").val() ,
            content : $("#content").val()
        };

        if (!confirm("정말로 수정하시겠습니까?")) {
            return;
        }

        var id = $("#id").val();

        $.ajax({
            type : "PUT" ,
            url : "/api/v1/posts/" + id ,
            dataType : "json" ,
            contentType : "application/json; charset=utf-8" ,
            data : JSON.stringify(data)
        }).done(function() {
            alert("수정이 완료되었습니다");
            window.location.href = "/"
        }).fail(function(error) {
            alert(JSON.stringify(error));
        });
    } ,

    delete : function() {
        if (!confirm("정말로 삭제하시겠습니까?")) {
            return;
        }
        var id = $("#id").val();

        $.ajax({
            type : "DELETE" ,
            url  : "/api/v1/posts/" + id ,
            dataType : "json" ,
            contentType : "application/json; charset=utf-8"
        }).done(function(){
            alert("글이 삭제되었습니다.");
            window.location.href = "/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }
};

main.init();