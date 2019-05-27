module.exports = {
	lintOnSave: false,
	devServer: {
		proxy: {
			"^/api": {
				target: "http://localhost/projects/wwd_vuejs_setup/"
			},
		}
	}
};
