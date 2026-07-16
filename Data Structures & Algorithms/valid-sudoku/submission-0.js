class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    searchAllRows(board) {
        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            let set = new Set();
            for (let j = 0; j < row.length; j++) {
                if (row[j] !== "." && set.has(row[j])) {
                    return false;
                } else {
                    set.add(row[j]);
                }
            }
        }
        return true;
    }

    searchAllColumn(board) {
        for (let col = 0; col < board[0].length; col++) {
            let set = new Set();

            for (let row = 0; row < board.length; row++) {
                if (board[row][col] !== "." && set.has(board[row][col])) {
                    return false;
                } else {
                    set.add(board[row][col]);
                }
            }
        }

        return true;
    }

    searchSingleBoard(box) {
        let set = new Set();
        for (let i = 0; i < box.length; i++) {
            if (box[i] !== "." && set.has(box[i])) {
                return false;
            } else {
                set.add(box[i]);
            }
        }

        return true;
    }

    isValidSudoku(board) {
        let rowCheck = this.searchAllRows(board);
        let columnCheck = this.searchAllColumn(board);
        let singleBoardCheck = false;

        let boxes = [];

        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                let box = [];

                for (let i = row; i < row + 3; i++) {
                    for (let j = col; j < col + 3; j++) {
                        box.push(board[i][j]);
                    }
                }

                boxes.push(box);
            }
        }

        for (let i = 0; i < boxes.length; i++) {
            singleBoardCheck = this.searchSingleBoard(boxes[i]);
            if(!singleBoardCheck) break;
        }


        return rowCheck && columnCheck && singleBoardCheck;
    }
}
