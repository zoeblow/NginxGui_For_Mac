export default {
	getFileData(files, callback = new Function) {
		let data = [];
		for (let file of files) {
			if (file.name === 'nginx') {
				const path = file.path;
				const dir = Path.join(Path.dirname(path), '../');
				const logs = Path.join(dir, './logs/');
				data.push({
					path,
					dir,
					logs,
					name: file.name,
					conf: Path.join(dir, '../../../etc/nginx/nginx.conf'),
					access: `${logs}access.log`,
					error: `${logs}error.log`,
					pid: `${logs}nginx.pid`
				})
			}
		}
		callback(data)
	}
}