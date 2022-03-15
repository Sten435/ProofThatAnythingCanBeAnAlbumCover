let file;
let area;
let cover;
let vinyl;
let save;

window.addEventListener('load', () => {
	file = document.getElementById('file');
	area = document.getElementById('area');
	cover = document.getElementById('cover');
	vinyl = document.getElementById('vinyl');
	save = document.getElementById('save');

	Main();
});

const Main = () => {
	area.addEventListener('click', onFileClick);
	file.addEventListener('change', handleFiles);
	save.addEventListener('click', SaveImage);
};

const onFileClick = (e) => {
	file.click();
};

const handleFiles = (e) => {
	readURL(file);
};

const SaveImage = (e) => {
	document.getElementsByClassName('click-here')[0].style.display = 'none';
	html2canvas(document.querySelector('#content-full'), { backgroundColor: null }).then((canvas) => {
		var a = document.createElement('a');
		a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
		a.download = 'Proof-cover.jpg';
		a.click();
	});
	document.getElementsByClassName('click-here')[0].style.display = 'block';
};

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			cover.style.backgroundImage = `linear-gradient(0deg, #9725, #9725), url("${e.target.result}")`;
			vinyl.style.backgroundImage = `url("./img/vinyl.png"),url("${e.target.result}")`;
		};
		reader.readAsDataURL(input.files[0]);
	}
}
