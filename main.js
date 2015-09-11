// @customizable
var operator = "red", declaration = "blue", control = "red", primitive = "green", builtin = "blue";

var RULES = {
    "arguments": primitive,
    "break": control,
    "case": control,
    "catch": control,
    "continue": control,
    "delete": operator,
    "do": control,
    "else": control,
    "eval": builtin,
    "false": primitive,
    "finally": primitive,
    "for": control,
    "function": declaration,
    "if": control,
    "in": operator,
    "instanceof": operator,
    "new": declaration,
    "null": primitive,
    "return": control,
    "switch": control,
    "this": primitive,
    "throw": control,
    "true": primitive,
    "try": control,
    "typeof": operator,
    "undefined": primitive,
    "var": declaration,
    "while": control
};

// cannot contain <, >, span, class, " or /

var from = document.getElementById("from");
var to = document.getElementById("to");

function html_escape(text) {
    text = text.replace(/\n/g, "<br>");
    text = text.replace(/ /g, "&nbsp;")
    return text;
}

function highlight(text, start, end) {
    text = html_escape(text);
    for (attr in RULES) {
        // TODO: in and instanceof creates a problem
        text = text.replace(new RegExp(attr, 'g'), "<span style=\"color:" + RULES[attr] + "\">" + attr + "</span>");
    }
    return text;
}

function input(event) {
    to.innerHTML = highlight(from.value, from.selectionStart, from.selectionEnd);
}

from.addEventListener("input", input);
// TODO: preventDefault tab action
