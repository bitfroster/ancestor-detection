function hasCommonAncestor(pairs, a, b) {
    const parentsMap = new Map();
    
    for (const [parent, child] of pairs) {
        if (!parentsMap.has(child)) {
            parentsMap.set(child, new Set());
        }
        parentsMap.get(child).add(parent);
    }
    
    // Helper function to get all ancestors of a node iteratively
    function getAllAncestors(node) {
        const ancestors = new Set();
        const stack = [node];

        while (stack.length > 0) {
            const current = stack.pop();
            if (parentsMap.has(current)) {
                for (const parent of parentsMap.get(current)) {
                    if (!ancestors.has(parent)) {
                        ancestors.add(parent);
                        stack.push(parent);
                    }
                }
            }
        }

        return ancestors;
    }
    
    const ancestorsA = getAllAncestors(a);
    const ancestorsB = getAllAncestors(b);
    
    // Check if there's any intersection between the ancestor sets
    return [...ancestorsA].some(ancestor => ancestorsB.has(ancestor));
}

export default hasCommonAncestor;