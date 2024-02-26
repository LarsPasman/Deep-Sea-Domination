import java.io.*;
import java.util.*;

public class Evolution {
  public static void main(String[] args) throws IOException {
    BufferedReader read =
        new BufferedReader(new FileReader("evolution.in"));
    int n = Integer.parseInt(read.readLine());

    List<Set<String>> cows = new ArrayList<>();
    Set<String> allCharSet = new HashSet<>();
    for (int c = 0; c < n; c++) {
      StringTokenizer chars = new StringTokenizer(read.readLine());
      int charNum = Integer.parseInt(chars.nextToken());
      Set<String> currCow = new HashSet<>();
      for (int i = 0; i < charNum; i++) {
        currCow.add(chars.nextToken());
      }
      allCharSet.addAll(currCow);
      cows.add(currCow);
    }
    read.close();

    List<String> allChars = new ArrayList<>(allCharSet);

    PrintWriter written = new PrintWriter("evolution.out");
    // Iterate over every pair of characteristics and check if the tree is
    // evolutionarily proper relative to that pair
    for (int a = 0; a < allChars.size(); a++) {
      for (int b = a + 1; b < allChars.size(); b++) {
        boolean both = false, onlyA = false, onlyB = false;
        for (Set<String> c : cows) {
          boolean hasA = c.contains(allChars.get(a));
          boolean hasB = c.contains(allChars.get(b));

          if (hasA && hasB) {
            both = true;
          } else if (hasA && !hasB) {
            onlyA = true;
          } else if (!hasA && hasB) {
            onlyB = true;
          }
        }

        /*
         * If we find a cow which has the characteristic a,
         * another cow which has the characteristic b, and
         * another cow with both characteristics a and b, then
         * the tree isn't evolutionarily proper.
         */
        if (onlyA && onlyB && both) {
          written.println("no");
          written.close();
          System.exit(0);
        }
      }
    }

    written.println("yes");
    written.close();
  }
}
