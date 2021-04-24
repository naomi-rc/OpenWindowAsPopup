const features = "toolbar,scrollbars,resizable,fullscreen";

/**
 * Opens selected window as a popup
 */
const openAsPopup = function(info, tab) { 
    try{
        chrome.windows.create({"url": tab.url, "type": "popup"});
    }
    catch(error){
        console.log(error)
    }    
}

var createProperties = {id: "openaspopup", title: "Open window as popup"}

chrome.runtime.onInstalled.addListener(async () => {    
    chrome.contextMenus.create(createProperties);
    chrome.contextMenus.onClicked.addListener(openAsPopup);
});