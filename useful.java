import java.util.Scanner;

public class useful {
    public static void clearScreen() {  
        System.out.print("\033[H\033[2J");  
        System.out.flush(); 
        }

    public static void print(Object x) {
        System.out.println(x);
    }
    
    public static boolean timeUserInput(double time) {
      double x = System.currentTimeMillis();
      Scanner timing = new Scanner(System.in);
      timing.nextLine();
      double y = System.currentTimeMillis();
      return ((y-x) <= time);
    }

    public static void waitForInput() {
      Scanner wait = new Scanner(System.in);
      wait.nextLine();
    }
}
