#include <stdio.h>

int main() {
    float temp_f; // 用於存儲華氏溫度
    float temp_c; // 用於存儲攝氏溫度
    char line_text[50]; // 用於存儲用戶輸入的文本

    printf("25：");
    fgets(line_text, sizeof(line_text), stdin);
    sscanf(line_text, "%f", &temp_c);

    temp_f = ((9.0 / 5.0) * temp_c) + 32.0;

    printf("%.2f 華氏度。\n", temp_f);

    return 0;
}