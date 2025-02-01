import java.util.*;

public class RockTacSolver {
    private static int[] numSolutions = {0, 0, 0, 0, 0};

    public static void main(String[] args) {
        useful.clearScreen();
        ArrayList<Integer> gameState = new ArrayList<>(Arrays.asList());
        //useful.print(checkIfWin(gameState));
        numSolutions = calculateGames(gameState, numSolutions);
        useful.print(numSolutions);
    }


    public static int[] calculateGames(ArrayList<Integer> moveList, int[] solutions) {
        boolean[] newWins = checkIfGameOver(moveList);
        if (newWins[0]) {
            //System.out.print("," + moveList);
            if (newWins[1] && newWins[2]) {
                solutions[4]++;
            } else if (newWins[1]) {
                solutions[1]++;
            } else if (newWins[2]) {
                solutions[2]++;
            } else {
                solutions[3]++;
            }
            solutions[0]++;
            useful.print("Solutions: " + solutions[0] + " / Rock wins: " + solutions[1] + " / Paper wins: " + solutions[2] + " / Scissors wins:" + solutions[3] + " / Draws: " + solutions[4]);
            return solutions;
        }
        ArrayList<Boolean> validMoves = validMoves(moveList);
        ArrayList<Integer> openSquares = new ArrayList<Integer>();

        for (int i=0; i<9; i++) {
            if (validMoves.get(i)) {
                openSquares.add(i);
            }
        }
        
        ArrayList<Integer> newMoveList = new ArrayList<Integer>(moveList);
        newMoveList.add(-1);
        //useful.print(openSquares + " / " + newMoveList);
        for (int i=0; i<openSquares.size();i++) {
            newMoveList.set(newMoveList.size()-1, openSquares.get(i));
            solutions = calculateGames(newMoveList, solutions);
        }
        return solutions;
    }

    public static boolean[] checkIfGameOver(ArrayList<Integer> moveList) {
        ArrayList<Integer> layout = convertToLayout(moveList);
        ArrayList<Boolean> validMoves = validMoves(moveList);
        boolean[] returnValue = {true, moveList.size()%3==1, moveList.size()%3==2};
        for (int i = 0; i < 7; i += 3) {
            if (layout.get(i) == layout.get(i+1) && layout.get(i+1) == layout.get(i+2) && layout.get(i) != -1) {
                return returnValue;
            }
        }
        for (int i = 0; i < 3; i ++) {
            if (layout.get(i) == layout.get(i+3) && layout.get(i+3) == layout.get(i+6) && layout.get(i) != -1) {
                return returnValue;
            }
        }
        if (layout.get(0) == layout.get(4) && layout.get(4) == layout.get(8) && layout.get(4) != -1) {
            return returnValue;
        }
        if (layout.get(2) == layout.get(4) && layout.get(4) == layout.get(6) && layout.get(4) != -1) {
            return returnValue;
        }
        for (int i = 0; i<9; i++) {
            if (validMoves.get(i)) {
                returnValue[0] = false;
                return returnValue;
            }
        }
        returnValue[1] = true;
        returnValue[2] = true;
        return returnValue;
    }

    public static ArrayList<Integer> convertToLayout(ArrayList<Integer> moveList) {
        ArrayList<Integer> boardLayout = new ArrayList<Integer>(Arrays.asList(-1, -1, -1, -1, -1, -1, -1, -1, -1));
        for (int i=0; i<9; i++) {
            boardLayout.set(i, moveList.lastIndexOf(i)%3);
        }
        return boardLayout;
    }

    public static ArrayList<Boolean> validMoves(ArrayList<Integer> gameState) {
        ArrayList<Boolean> validMoves = new ArrayList<Boolean>();
        ArrayList<Integer> moveAmounts = new ArrayList<Integer>(Arrays.asList(0,0,0,0,0,0,0,0,0));
        for (int i=0; i<gameState.size(); i++) {
            moveAmounts.set(gameState.get(i), moveAmounts.get(gameState.get(i))+1);
        }
        //useful.print(moveAmounts);
        if (gameState.size() < 3) {
            for (int i = 0; i<9; i++) {
                int currentIndex = gameState.lastIndexOf(i);
                if (currentIndex == -1) {
                    validMoves.add(true);
                } else {
                    validMoves.add(false);
                }
            }
        } else if (gameState.size()%3 == 0) {
            for (int i = 0; i<9; i++) {
                int currentIndex = gameState.lastIndexOf(i);
                if (moveAmounts.get(i) > 2) {
                    validMoves.add(false);
                } else if (currentIndex == -1) {
                    validMoves.add(true);
                } else if (currentIndex%3 == 2) {
                    validMoves.add(true);
                } else {
                    validMoves.add(false);
                }
            }
        } else if (gameState.size()%3 == 1) {
            for (int i = 0; i<9; i++) {
                int currentIndex = gameState.lastIndexOf(i);
                if (moveAmounts.get(i) > 2) {
                    validMoves.add(false);
                } else if (currentIndex == -1) {
                    validMoves.add(true);
                } else if (currentIndex%3 == 0) {
                    validMoves.add(true);
                } else {
                    validMoves.add(false);
                }
            }
        } else {
            for (int i = 0; i<9; i++) {
                int currentIndex = gameState.lastIndexOf(i);
                if (moveAmounts.get(i) > 2) {
                    validMoves.add(false);
                } else if (currentIndex == -1) {
                    validMoves.add(true);
                } else if (currentIndex%3 == 1) {
                    validMoves.add(true);
                } else {
                    validMoves.add(false);
                }
            }
        } 
        return validMoves;
    }
}