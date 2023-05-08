const theme = {
    init : function() {
        const btn = document.querySelector(".btn");
        btn.addEventListener("click", theme.handleClassBtn);
        btn.addEventListener("click", theme.handleClassBody);
        btn.addEventListener("click", theme.handleClassLeftContent);
        btn.addEventListener("click", theme.handleClassRightContent);
        btn.addEventListener("click", theme.handleClassTitle);
        btn.addEventListener("click", theme.handleClassTitleRightContent);
        btn.addEventListener("click", theme.handleClassBorderImg);
    },
    handleClassBtn : function() {
        const btn = document.querySelector(".btn");
        btn.classList.toggle("active");
    },
    handleClassBody : function() {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
    },
    handleClassLeftContent : function () {
        const leftcontent = document.querySelector(".left-content");
        leftcontent.classList.toggle("dark");
    },
    handleClassRightContent : function () {
        const rightcontent = document.querySelector(".right-content");
        rightcontent.classList.toggle("dark");
    },
    handleClassTitle : function () {
        const title = document.getElementsByTagName("h2");
        for (const titleValue of title) {
            titleValue.classList.toggle("dark");
        }
    },
    handleClassTitleRightContent : function () {
        const titleRightContent = document.querySelectorAll("h2 .main-section_title__right");
        for (const titleRightContentValue of titleRightContent) {
            titleRightContentValue.classList.toggle("dark");
        }
    },
    handleClassBorderImg : function () {
        const borderImg = document.querySelector(".main-title_profilpic");
        borderImg.classList.toggle("dark");
    }
}

