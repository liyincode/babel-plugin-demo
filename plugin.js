import * as t from '@babel/types';
export default function ({ types: t }) {
	return {
		visitor: {
			BinaryExpression(path, state) {
				if (path.node.operator !== '===') {
					return;
				}

				path.node.left = t.identifier('aaa');
				path.node.right = t.identifier('bbb');
			}

		}
	}
}


