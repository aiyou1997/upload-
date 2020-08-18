let uploadFiles = function () {
	let filesList = [];
	return {
		upload(that) { // that为获取上传文件的input元素.
			if (filesList.length === 0) {
				for (let i = 0; i < that.files.length; i++) {
					let name = that.files[i].name,
						url = window.URL.createObjectURL(that.files[i]);
					filesList.push({
						name: name,
						url: url
					})
				}
			} else {
				for (let i = 0; i < that.files.length; i++) {
					let name = that.files[i].name,
						url = window.URL.createObjectURL(that.files[i]),
						reupload = null
					for (n in filesList) {
						if (name === filesList[n].name) {
							reupload = true;
							alert(`列表已经存在${name}文件`);
						}
					}
					if (!reupload) {
						filesList.push({
							name: name,
							url: url
						})
					}
				}
			};
			return filesList;
		},
		delete(name) { // 参数为要删除文件的文件名
			for (n in filesList) {
				if (name === filesList[n].name) {
					filesList.splice(n, 1);
				}
			};
			return filesList;
		}
	}
}();