export class DateUtil {
  static getYear(date: Date): string {
    return date.getFullYear().toString();
  }

  static getMonth(date: Date): string {
    return (date.getMonth() + 1).toString();
  }

  static getDay(date: Date): string {
    return date.getDate().toString();
  }
}
