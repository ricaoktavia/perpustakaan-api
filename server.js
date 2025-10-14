const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Import controller
const bookController = require('./controllers/bookController');
const bookExtraController = require('./controllers/bookExtraController');

// ROUTE CRUD
app.get('/books', bookController.getBooks);
app.get('/books/:id', bookController.getBookById);
app.post('/books', bookController.addBook);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

// ROUTE EXTRA (search & pagination)
app.get('/books-search', bookExtraController.searchBooks);
app.get('/books-page', bookExtraController.paginateBooks);

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));

// AUTHOR
const authorController = require('./controllers/authorController');
const authorExtraController = require('./controllers/authorExtraController');

app.get('/authors', authorController.getAuthors);
app.get('/authors/:id', authorController.getAuthorById);
app.post('/authors', authorController.addAuthor);
app.put('/authors/:id', authorController.updateAuthor);
app.delete('/authors/:id', authorController.deleteAuthor);

// ROUTE EXTRA (search & pagination)
app.get('/authors-search', authorExtraController.searchAuthors);
app.get('/authors-page', authorExtraController.paginateAuthors);

// MEMBER
const memberController = require('./controllers/memberController');
const memberExtraController = require('./controllers/memberExtraController');

app.get('/members', memberController.getMembers);
app.get('/members/:id', memberController.getMemberById);
app.post('/members', memberController.addMember);
app.put('/members/:id', memberController.updateMember);
app.delete('/members/:id', memberController.deleteMember);

// ROUTE EXTRA (search & pagination)
app.get('/members-search', memberExtraController.searchMembers);
app.get('/members-page', memberExtraController.paginateMembers);

const categoryController = require('./controllers/categoryController');

// routes category
app.get('/categories', categoryController.getCategories);
app.get('/categories/:id', categoryController.getCategoryById);
app.post('/categories', categoryController.addCategory);
app.put('/categories/:id', categoryController.updateCategory);
app.delete('/categories/:id', categoryController.deleteCategory);

const categoryExtraController = require('./controllers/categoryExtraController');

// ROUTE EXTRA (category)
app.get('/categories-search', categoryExtraController.searchCategories);
app.get('/categories-page', categoryExtraController.paginateCategories);

const fineController = require('./controllers/fineController');
const fineExtraController = require('./controllers/fineExtraController');

// ROUTE CRUD FINE
app.get('/fines', fineController.getFines);
app.get('/fines/:id', fineController.getFineById);
app.post('/fines', fineController.addFine);
app.put('/fines/:id', fineController.updateFine);
app.delete('/fines/:id', fineController.deleteFine);

// ROUTE EXTRA FINE
app.get('/fines-search', fineExtraController.searchByStatus);
app.get('/fines-total', fineExtraController.totalUnpaid);
app.get('/fines-page', fineExtraController.paginateFines);

const loanController = require('./controllers/loanController');
const loanExtraController = require('./controllers/loanExtraController');

// ROUTE CRUD LOAN
app.get('/loans', loanController.getLoans);
app.get('/loans/:id', loanController.getLoanById);
app.post('/loans', loanController.addLoan);
app.put('/loans/:id', loanController.updateLoan);
app.delete('/loans/:id', loanController.deleteLoan);

// ROUTE EXTRA LOAN
app.get('/loans-search', loanExtraController.searchByReturnStatus);
app.get('/loans-late', loanExtraController.getLateLoans);
app.get('/loans-page', loanExtraController.paginateLoans);

const publisherController = require('./controllers/publisherController');
const publisherExtraController = require('./controllers/publisherExtraController');

// ROUTE CRUD PUBLISHER
app.get('/publishers', publisherController.getPublishers);
app.get('/publishers/:id', publisherController.getPublisherById);
app.post('/publishers', publisherController.addPublisher);
app.put('/publishers/:id', publisherController.updatePublisher);
app.delete('/publishers/:id', publisherController.deletePublisher);

// ROUTE EXTRA PUBLISHER
app.get('/publishers-search', publisherExtraController.searchPublishers);
app.get('/publishers-page', publisherExtraController.paginatePublishers);

const rackController = require('./controllers/rackController');
const rackExtraController = require('./controllers/rackExtraController');

// ROUTES RACK
app.get('/racks', rackController.getRacks);
app.get('/racks/:id', rackController.getRackById);
app.post('/racks', rackController.addRack);
app.put('/racks/:id', rackController.updateRack);
app.delete('/racks/:id', rackController.deleteRack);

// Extra Rack
app.get('/racks/location/:location', rackExtraController.getRacksByLocation);
app.get('/racks/capacity/total', rackExtraController.getTotalCapacity);
app.get('/racks/capacity/above/:minCap', rackExtraController.getRacksAboveCapacity);

const returnController = require('./controllers/returnController');
const returnExtraController = require('./controllers/returnExtraController');

// ==========================
// ROUTES RETURN
// ==========================
app.get('/returns', returnController.getReturns);
app.get('/returns/:id', returnController.getReturnById);
app.post('/returns', returnController.addReturn);
app.put('/returns/:id', returnController.updateReturn);
app.delete('/returns/:id', returnController.deleteReturn);

// Extra Return
app.get('/returns/loan/:loan_id', returnExtraController.getByLoanId);
app.get('/returns/date/:date', returnExtraController.getByDate);
app.get('/returns/with-fine', returnExtraController.getTotalWithFine);

const staffController = require('./controllers/staffController');
const staffExtraController = require('./controllers/staffExtraController');

// Endpoint utama
app.get('/staff', staffController.getAllStaff);
app.get('/staff/:id', staffController.getStaffById);
app.post('/staff', staffController.createStaff);
app.put('/staff/:id', staffController.updateStaff);
app.delete('/staff/:id', staffController.deleteStaff);

// Endpoint tambahan
app.get('/staff-search', staffExtraController.searchStaff);
app.get('/staff-page', staffExtraController.getPaginatedStaff);

