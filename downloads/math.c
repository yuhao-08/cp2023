#include <stdio.h>
#include <time.h>

int main() {
    // 获取当前时间
    time_t currentTime;
    struct tm *localTime;

    time(&currentTime);
    localTime = localtime(&currentTime);

    // 打印当前时间
    printf("Current time: %04d-%02d-%02d %02d:%02d:%02d\n",
           localTime->tm_year + 1900, localTime->tm_mon + 1, localTime->tm_mday,
           localTime->tm_hour, localTime->tm_min, localTime->tm_sec);

    return 0;
}
