class DateUtils {
  
  static formatTime(date) {
    return new Date(date).toLocaleTimeString();
  }

  static formatDate(date) {
    var formatDate = new Date(date).toLocaleDateString();
    var values = formatDate.split('-');
    if(parseInt(values[1]) < 10) {
      values[1] = '0' + values[1];
    }
    if(parseInt(values[2]) < 10) {
      values[2] = '0' + values[2];
    }
    return values[0] + '-' + values[1] + '-' + values[2];
  }

  static formatDateTime(date) {
    return this.formatDate(date) + ' ' + this.formatTime(date);
  }

}

module.exports = DateUtils;
