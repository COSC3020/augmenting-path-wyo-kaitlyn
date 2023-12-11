function augmentingPath(graph, start, end, path = []) {
    // adds the start to the path
    path.push(start);

    // sees if the start is equal to the end, and returns the path
    if (start == end) {
        return path;
    }
    // iterates through the current node
    for (let i in graph[start]) {
        // sees if the node has already been visited
        if (!path.includes(i)) {
            // recursively calls to go to the nest node
            let newPath = augmentingPath(graph, i, end, path);
            // returns the path if it's found
            if (newPath.length > 0) { return newPath; }
            // if it's not, resets the path and adds the start node
            else {
                path = [];
                path.push(start);
            }
        }
    }

    // returns empty if there is no path
    return [];
}
