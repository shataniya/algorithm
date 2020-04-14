public class lp {
    public static int maxindexOf(int[] ss) {
        int len = ss.length;
        int index = 0;
        int max_val = ss[index];
        for (int i = 1; i < len; i++) {
            if (ss[i] > max_val) {
                index = i;
                max_val = ss[i];
            }
        }
        return index;
    }

    public static int trap(int[] ss) {
        int len = ss.length;
        if (len == 0) {
            return 0;
        }
        int ll = 0, l = 0, rr = len - 1, r = len - 1;
        int cc = maxindexOf(ss);
        int water = 0;
        while (rr > ll) {
            if (ll < cc) {
                l = ll + 1;
                while (ss[ll] > ss[l]) {
                    water += ss[ll] - ss[l];
                    l++;
                }
                ll = l;
            }
            if (rr > cc) {
                r = rr - 1;
                while (ss[rr] > ss[r]) {
                    water += ss[rr] - ss[r];
                    r--;
                }
                rr = r;
            }
        }
        return water;
    }

    public static void main(String[] args) {
        int[] ss = { 6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3 };
        System.out.println(trap(ss));
    }
}