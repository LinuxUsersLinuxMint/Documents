window.onload = function() 
{
    var lang = navigator.language;
    var pagetitle = document.getElementById("pagetitle");
    var paragraph = document.getElementById("paragraph");

    if (lang.startsWith("tr"))
    {
        document.title = "Dokümanlar";
        pagetitle.innerHTML = "- LinuxUsersLinuxMint yazılımları için dokümanlar -";
        paragraph.innerHTML = "* Bu sayfada LinuxUsersLinuxMint yazılımlarının ne olduğu/nasıl kullanılacağı ile ilgili dokümanlar vardır.";
    }
    else if (lang.startsWith("en"))
    {
        document.title = "Documents";
        pagetitle.innerHTML = "- Documentation for LinuxUsersLinuxMint software -";
        paragraph.innerHTML = "* This page contains documentation on what LinuxUsersLinuxMint software is/how to use it.";
    }
}