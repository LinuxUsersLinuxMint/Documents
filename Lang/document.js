window.onload = function() 
{
    var lang = navigator.language;
    var pagetitle = document.getElementById("pagetitle");
    var parapgraph = document.getElementById("parapgraph");
    var ytdown = document.getElementById("ytdown");

    if (lang.startsWith("tr"))
    {
        document.title = "Dokümanlar";
        pagetitle.innerHTML = "- LinuxUsersLinuxMint yazılımları için dokümanlar -";
        parapgraph.innerHTML = "* Bu sayfada LinuxUsersLinuxMint yazılımlarının ne olduğu/nasıl kullanılacağı ile ilgili dokümanlar vardır.";
        ytdown.innerHTML = "YoutubeDownloader (LinuxUsersLinuxMint tarafından katkıda bulunuldu , LinuxUsersLinuxMint yazılımı değildir.)";
    }
    else if (lang.startsWith("en"))
    {
        document.title = "Documents";
        pagetitle.innerHTML = "- Documentation for LinuxUsersLinuxMint software -";
        parapgraph.innerHTML = "* This page contains documentation on what LinuxUsersLinuxMint software is/how to use it.";
        ytdown.innerHTML = "YoutubeDownloader (Contributed by LinuxUsersLinuxMint , not LinuxUsersLinuxMint software)";
    }
}