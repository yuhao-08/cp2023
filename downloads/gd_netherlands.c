#include <stdio.h>

void printColorStripe(int width, char colorCode[]) {
    for (int i = 0; i < width; i++) {
        printf("%s#\033[0m", colorCode);
    }
    printf("\n");
}

int main() {
    int height = 3;  // 荷蘭國旗高度
    int width = 10;  // 荷蘭國旗寬度

    char red[] = "\033[1;31m";   // 紅色 ANSI 轉義碼
    char white[] = "\033[1;37m"; // 白色 ANSI 轉義碼
    char blue[] = "\033[1;34m";  // 藍色 ANSI 轉義碼

    // 打印荷蘭國旗
    for (int i = 0; i < height; i++) {
        if (i == 0) {
            printColorStripe(width, red);   // 打印紅色條紋
        } else if (i == 1) {
            printColorStripe(width, white); // 打印白色條紋
        } else if (i == 2) {
            printColorStripe(width, blue);  // 打印藍色條紋
        }
    }

    return 0;
}
