var lang = navigator.language || navigator.userLanguage;
if (lang.starsWith("tr"))
{
    document.location.href = "/Documents/documents_tr.html";
}
else if (lang.starsWith("en"))
{
    document.location.href = "/Documents/documents.html";
}