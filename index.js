function introduction(name = "Aki") {
    return `Hi, my name is ${name}.`;  // Use backticks (`) for interpolation
}

function introductionWithLanguage(name = "Aki", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}