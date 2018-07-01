/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var max = 0;
    if(root == null){
        return 0;
    }else if(root.left == null & root.right == null){
        return 1;
    }else{
        var max_left = maxDepth(root.left);
        var max_right = maxDepth(root.right);
        
        return 1 + Math.max(max_left,max_right);
    }
};
