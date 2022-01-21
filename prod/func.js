CodeMirror.Vim.map('jj', '<Esc>', 'insert');
CodeMirror.commands.save

const myTextEditor = CodeMirror(document.getElementById('source'), {
	lineNumbers: true,
	tabSize: 2,
	keyMap: "vim",
	value: "You can only use Vim to edit....",
});

function mdconvert() {
	const converter = new showdown.Converter({ noHeaderId: true });
	const text = myTextEditor.getValue();
	const html = converter.makeHtml(text);
	document.getElementById("output").innerHTML = html;
	document.getElementById("raw-html").innerHTML = html;
};

function copyDiv() {
	const r = document.createRange();
	r.selectNode(document.getElementById("output"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	alert("Notes Copied!")
};

function copyHtml() {
	const r = document.createRange();
	r.selectNode(document.getElementById("html"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	alert("HTML Copied!")
};

function eraseMd() {
	myTextEditor.setValue('');
};

function showHTML(){
	document.getElementById("html").style.display = "block";
	document.getElementById("output").style.display = "none";
	document.getElementById("cphtml").style.display = "block";
	document.getElementById("cpvisual").style.display = "none";
	document.getElementById("showCode").classList.add("active");
	document.getElementById("showVis").classList.remove("active");
};

function showVisual(){
	document.getElementById("html").style.display = "none";
	document.getElementById("output").style.display = "block";
	document.getElementById("cpvisual").style.display = "block";
	document.getElementById("cphtml").style.display = "none";
	document.getElementById("showCode").classList.remove("active");
	document.getElementById("showVis").classList.add("active");
}
