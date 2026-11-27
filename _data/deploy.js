const { execFileSync } = require("child_process");

function gitBranch() {
	try {
		return execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();
	} catch {
		return "";
	}
}

module.exports = function () {
	const context = process.env.CONTEXT || "";
	const branch = process.env.BRANCH || gitBranch();
	const productionBranch = !branch || branch === "main" || branch === "master" || branch === "HEAD";

	return {
		branch,
		showBadge: context === "production" ? false : !productionBranch,
	};
};
