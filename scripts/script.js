// 获取语言切换按钮、语言选择界面和所有的语言选项按钮
var languageSwitcher = document.getElementById('language-switcher');
var languageSelection = document.getElementById('language-selection');
var languageOptions = document.getElementsByClassName('language-option');
var closeButton = document.getElementById('close-button');

// 当用户点击语言切换按钮时，显示语言选择界面
languageSwitcher.addEventListener('click', function() {
    languageSelection.style.display = 'flex';
});

// 当用户点击 CLOSE 按钮时，隐藏语言选择界面
closeButton.addEventListener('click', function() {
    languageSelection.style.display = 'none';
});

// 当用户选择一种语言，切换网页的语言，并更新语言切换按钮的 SVG 图片
for (var i = 0; i < languageOptions.length; i++) {
    languageOptions[i].addEventListener('click', function() {
        // 这里需要根据你的实际需求来实现语言切换和更新 SVG 图片的功能
        // 例如，你可以使用 AJAX 来加载新的语言文件，然后更新网页的内容
        // 你也可以根据选中的语言来更新 SVG 图片的 src 属性
    });
}