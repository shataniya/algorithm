public class demo {
    public static int jump(int[] ss) {
        int len = ss.length;
        if (len == 1) {
            return 0;
        }
        int ll = 0, l = 0, nn = 0;
        int cc = ss[ll];
        while (cc < len - 1) {
            int max_l = ll + 1;
            l = max_l + 1;
            int ssll = ll + ss[ll];
            while (l <= ssll) {
                if (ss[l] + l >= ss[max_l] + max_l) {
                    max_l = l;
                }
                l++;
            }
            cc = ss[max_l] + max_l;
            ll = max_l;
            nn++;
        }
        return nn + 1;
    }

    public static void main(String[] args) {
        int[] ss = { 2, 3, 1, 1, 4 };
        System.out.println(jump(ss));
    }
}