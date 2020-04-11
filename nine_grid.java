import java.util.Arrays;

public class nine_grid {
    public static boolean intToBoolean(int num) {
        boolean bool = (num == 0) ? false : true;
        return bool;
    }

    // 打印九宫格
    public static void printlnGrid(int[][] grid) {
        for (int[] val : grid) {
            System.out.println(Arrays.toString(val));
        }
    }

    public static int[][] Grid(int num) {
        int k = num * num;
        int x_max = num - 1;
        int y_mid = (num - 1) / 2;
        // 初始化grid
        int[][] grid = new int[num][num];
        int n = 1;
        int i = x_max;
        int j = y_mid;
        while (n <= k) {
            // 这里将索引i 和 j都进行整除
            i = Math.floorMod(i, num);
            j = Math.floorMod(j, num);
            // 判断这个位置上是不是已经存在数字
            if (intToBoolean(grid[i][j])) {
                // 说明这个位置上已经存在数字
                // 那就将位置往左下角移动
                i++;
                j--;
            } else {
                // 说明这个位置没有数字，那就填上数字
                grid[i][j] = n;
                // 然后将位置（往右上角的方向）向上移动两格，向右移动一格
                i--;
                i--;
                j++;
                n++;
            }
        }
        return grid;
    }

    public static void main(String[] args) {
        printlnGrid(Grid(3));
    }
}