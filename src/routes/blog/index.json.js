import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";



const getAllPosts = () =>
	fs.readdirSync("content").map(fileName => {
		const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
		const postData = grayMatter(post).data;

		const postDate = new Date(postData.date);
		let newDate = postDate.getDate() + ' ' + postDate.toLocaleString('default', { month: 'long' }) + ' ' + postDate.getFullYear()

		postData.date = newDate;
		return postData;
	});

const sortPosts = (a, b) => {
	return a.date > b.date ? -1 : 0
}

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	const posts = getAllPosts().sort(sortPosts);

	res.end(JSON.stringify(posts));
}