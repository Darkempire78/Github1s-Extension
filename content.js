buttonNav = document.getElementsByClassName("file-navigation mb-3 d-flex flex-items-start");

if (buttonNav[0] != null) {
    // Options
    chrome.storage.sync.get(["backgroundColor", "textColor", "openInNewPage"], function (obj) {  
        
        try {
            var backgroundColor = obj.backgroundColor;
            var textColor = obj.textColor;
            var openInNewPage = obj.openInNewPage;
        } catch (error) {
            var backgroundColor = '#fafbfc';
            var textColor = "#24292e";
            var openInNewPage = false;
        }
        
        // Create the Github1s button
        var btn = document.createElement("a");
        btn.innerHTML = "View on Github1s";
        btn.classList = "btn ml-2 d-none d-md-block";
        btn.href = window.location.href.replace("https://github.com/", "https://github1s.com/");

        if (openInNewPage) {
            btn.target = "_blank"
        }

        if (!backgroundColor.startsWith("#")){
            backgroundColor = `#${backgroundColor}`
        }
        if (!textColor.startsWith("#")){
            textColor = `#${textColor}`
        }

        btn.style.backgroundColor = backgroundColor;
        btn.style.color = textColor;
        
        // Add the button
        buttonNav[0].appendChild(btn);
    });
}