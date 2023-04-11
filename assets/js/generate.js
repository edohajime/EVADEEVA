function generateHeader(webPages){
	
	// Header titles
	var headers = new Array();
	headers[0] = 'Trang Chủ';
	headers[1] = 'Giới Thiệu';
	headers[2] = 'Sản Phẩm';
	headers[3] = 'Hỏi Đáp';
	headers[4] = 'Blogs';
	headers[5] = 'Liên Hệ';
	
	// Menu items Sản phẩm
	var menuItems = new Array();
	menuItems[0] = 'Tranh Mành Treo';
	menuItems[1] = 'Tranh Đóng Khung';
	menuItems[2] = 'Tranh Khắc Gỗ';
	menuItems[3] = 'Tranh Tập';
	menuItems[4] = 'Sổ Giấy Dó';
	menuItems[5] = 'Tập Tô Màu';
	
	// href menubar
	var hrefs = new Array();
	hrefs[0] = 'index.html';
	hrefs[1] = 'introduction.html';
	hrefs[2] = 'products.html';
	hrefs[3] = '#ques';
	hrefs[4] = 'blog.html';
	hrefs[5] = '#help';
	
	// generate header
	var header = '<header id="header" class="fixed-top d-flex align-items-center ">';
	header += '<div class="container d-flex align-items-center justify-content-between">';
	header += '<h1 class="logo"><a href="index.html">Tranh Đông Hồ</a></h1>';
	header += '<nav id="navbar" class="navbar">';
	header += '<ul>';
	
	// menubar
	for (var i = 0; i < 6; i++){
		if (i == 2){ // Dropdown menu sản phẩm
			header += '<li class="dropdown"><a class="nav-link scrollto'; 
			if (webPages == i) { 
				header +=' active';
			}
			header += '" href="'; 
			header += hrefs[i]; 
			header += '"><span>';
			header += headers[i];
			header += '</span> <i class="bi bi-chevron-down"></i></a>';
			header += '<ul>';
			for (var j = 0; j < 6; j++){
				header += '<li><a href="#">';
				header += menuItems[j];
				header += '</a></li><hr>';
			}
			header += '</ul>';
			header += '</li>';
		} else { // others menu
			header += '<li><a class="nav-link scrollto';
			if (webPages == i) { 
				header +=' active';
			} 
			header += '" href="'; 
			header += hrefs[i]; 
			header += '">';
			header += headers[i];
			header += '</a></li>';
		}
	}
	header += '</ul>';
	header += '<i class="bi bi-list mobile-nav-toggle"></i>';
	header += '</nav>';
	header += '</div>';
	header += '</header>';
	
	document.write(header);
}

var def = "Bài viết, sản phẩm...";
let emp = "";

function generateSearch(){
	var hero = '<div class="search">';
	hero += '<form class="form-search">';
	hero += '<input class="form-text" name="txtSearch" type="text" onclick="setValue(this.form, true)" onblur="setValue(this.form, false)">';
	hero += '<button class="btnSearch"><i class="fa-solid fa-magnifying-glass"></i> <span>Tìm Kiếm</span></button>';
	hero += '</form>';
	hero += '</div>';
	
	document.write(hero);
}

function generateBlogEntry(){
	var titles = new Array();
	var contents = new Array();
	
	var authors = new Array();
	var dates = new Array();
	var comments = new Array();

	titles[0] = 'Tranh Đông Hồ - Quà tặng đặc biệt';
	titles[1] = '"Màu dân tộc" vẫn giữ "nét tươi ...';
	titles[2] = 'Lịch sử lâu đời của dòng tranh ...';
	titles[3] = 'Những cải tiến về hình thức tranh ...';
	titles[4] = 'Nét tinh hoa của văn hóa dân gian ...';
	
	contents[0] = 'Một sản phẩm mang ý nghĩa văn hóa đặc trưng của Việt Nam. Qua nhiều thế kỷ tồn tại, dòng tranh Đông Hồ...';
	contents[1] = 'Nhiều thế hệ người Việt từng thuộc bài thơ "Bên kia sông Đuống" của Hoàng Cầm, trong đó có câu: "Tranh...';
	contents[2] = 'Theo sử sách, người Việt đã biết làm một thứ giấy gọi là mật hương chỉ vào thế kỷ thứ III. Nghề khắc ...';
	contents[3] = 'Mở cửa giao lưu với thế giới không chỉ để cứu nền kinh tế, mà còn cứu nhiều ngành nghề khác, trong đó ...';
	
	authors[0] = 'Tuấn Thịnh';
	authors[1] = 'Ánh Nguyễn';
	authors[2] = 'Lan Anh';
	authors[3] = 'Trọng Nghĩa';
	
	dates[0] = '2016-09-27';
	dates[1] = '2016-03-07';
	dates[2] = '2015-12-21';
	dates[3] = '2015-12-21';
	
	comments[0] = 12;
	comments[1] = 34;
	comments[2] = 36;
	comments[3] = 40;
	
	var blog = '<div class="row">';
	for (var i = 0; i < 4; i++){
		blog += '<article class="col-6 col-md-4 col-lg-3">';
		blog += '<div class="entry">';
		blog += '<div class="entry-img entry-img-' + (i + 1) + '">';
		blog += '<a href="blog-single.html" class="entry-blog-before">' + contents[i] + '</a>';
		blog += '</div>';
		blog += '<h2 class="entry-title">';
		blog += '<a href="blog-single.html">' + titles[i] + '</a>';
		blog += '</h2>';
		blog += '<div class="entry-meta">';
		blog += '<div class="row align-items-center">';
		blog += '<div class="col-6">';
		blog += '<i class="bi bi-person"></i> <a href="blog-single.html">' + authors[i] + '</a><br>';
		blog += '<i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="' + dates[i] + '">' + dates[i] + '</time></a><br>';
		blog += '<i class="bi bi-chat-dots"></i> <a href="blog-single.html">' + comments[i] + ' Bình Luận</a>';
		blog += '</div>';
		blog += '<div class="col-6">';
		blog += '<div class="read-more">';
		blog += '<a href="blog-single.html">Đọc Thêm</a>';
		blog += '</div>';
		blog += '<div class="share">';
		blog += '<a href="blog-single.html"><i class="fa-solid fa-share-from-square"></i> Chia sẻ</a>';
		blog += '</div>';
		blog += '</div>';
		blog += '</div>';
		blog += '</div>';
		blog += '</article>';
	}
	blog += '</div>';
	
	document.write(blog);
}

function setValueSearch(fn){
	fn.txtSearch.value = def;
}

function setValue(fn, isClicked){
	let value = fn.txtSearch.value;
	
	if (isClicked){
		if (value.trim() == def) {
			fn.txtSearch.value = emp;
		}
	} else {
		if (value.trim() == emp) {
			fn.txtSearch.value = def;
		}
	}
}