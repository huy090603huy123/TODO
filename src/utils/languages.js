export const LANGUAGES = {
  EN: 'en',
  VI: 'vi'
};

export const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    // Header
    title: 'TODO',
    addPlaceholder: 'Add a to-do item...',
    addButton: 'Add',
    
    // Messages
    emptyMessage: 'Add Your First To-Do Item! 📝',
    usageTips: 'Usage Tips 💡:',
    tip1: '✔️ Press Enter to submit actions.',
    tip2: '✔️ Double-click to edit tasks.',
    tip3: '✔️ Access quick actions in the right sidebar.',
    tip4: '🔒 Your data is stored locally in your browser.',
    tip5: '📝 Supports data download and import.',
    
    // Status
    itemsRemaining: 'items remaining',
    allCompleted: 'All completed, good job!',
    
    // Actions
    markAllDone: 'Mark All Done',
    finishAll: 'Finish all',
    clearCompleted: 'Clear Completed',
    clearAll: 'Clear All',
    exportData: 'Export data',
    importData: 'Import(txt/json)',
    
    // Filters
    all: 'All',
    inProgress: 'In Progress',
    completed: 'Completed',
    
    // Confirmations
    confirmMarkAll: 'Confirm to mark all as completed?',
    confirmClearCompleted: 'Confirm to clear all completed items?',
    confirmClearAll: 'Confirm to clear all todo items?',
    
    // Messages
    importSuccess: 'File imported successfully!',
    importError: 'Error parsing file. Please ensure it\'s a valid JSON format.',
    fileReadError: 'Error reading file.',
    
    // Slogan
    slogan: 'Act Now, Simplify Life.☕',
    
    // Navigation
    about: 'About',
    language: {
      en: 'En',
      vi: 'Vi'
    },
    
    // Popup Menu
    actions: 'Actions',
    filters: 'Filters',
    dataManagement: 'Data Management'
  },
  
  [LANGUAGES.VI]: {
    // Header
    title: 'CÔNG VIỆC',
    addPlaceholder: 'Thêm công việc mới...',
    addButton: 'Thêm',
    
    // Messages
    emptyMessage: 'Thêm Công Việc Đầu Tiên! 📝',
    usageTips: 'Mẹo Sử Dụng 💡:',
    tip1: '✔️ Nhấn Enter để thực hiện.',
    tip2: '✔️ Nhấp đúp để chỉnh sửa.',
    tip3: '✔️ Truy cập thao tác nhanh ở thanh bên phải.',
    tip4: '🔒 Dữ liệu được lưu cục bộ trong trình duyệt.',
    tip5: '📝 Hỗ trợ tải xuống và nhập dữ liệu.',
    
    // Status
    itemsRemaining: 'công việc còn lại',
    allCompleted: 'Tất cả hoàn thành, làm tốt lắm!',
    
    // Actions
    markAllDone: 'Đánh Dấu Tất Cả',
    finishAll: 'Hoàn thành tất cả',
    clearCompleted: 'Xóa Đã Hoàn Thành',
    clearAll: 'Xóa Tất Cả',
    exportData: 'Xuất dữ liệu',
    importData: 'Nhập(txt/json)',
    
    // Filters
    all: 'Tất cả',
    inProgress: 'Đang làm',
    completed: 'Đã hoàn thành',
    
    // Confirmations
    confirmMarkAll: 'Xác nhận đánh dấu tất cả là hoàn thành?',
    confirmClearCompleted: 'Xác nhận xóa tất cả công việc đã hoàn thành?',
    confirmClearAll: 'Xác nhận xóa tất cả công việc?',
    
    // Messages
    importSuccess: 'Nhập file thành công!',
    importError: 'Lỗi phân tích file. Vui lòng đảm bảo định dạng JSON hợp lệ.',
    fileReadError: 'Lỗi đọc file.',
    
    // Slogan
    slogan: 'Hành Động Ngay, Cuộc Sống Đơn Giản.☕',
    
    // Navigation
    about: 'Giới thiệu',
    language: {
      en: 'En',
      vi: 'Vi'
    },
    
    // Popup Menu
    actions: 'Thao tác',
    filters: 'Bộ lọc',
    dataManagement: 'Quản lý dữ liệu'
  }
};

export const getTranslation = (language, key) => {
  return TRANSLATIONS[language]?.[key] || TRANSLATIONS[LANGUAGES.EN][key] || key;
}; 