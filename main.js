// Identitas
const nama = 'Andi Sutena' // String
const jurusan = 'Informatika' // String

// Naming Convention = Snake_Case

// Soal
class Question {
    constructor(no_question, question, choice, correct_answer) {
        this.no_question = no_question;
        this.question = question;
        this.choice = choice;
        this.correct_answer = correct_answer;
    }

    tampil_question() {
        console.log(`No. ${this.no_question}`)
        console.log(`Soal: ${this.question}`)
        console.log(`Opsi: ${this.choice}`)
    }

    correct() {
        const corAns = this.correct_answer
        return corAns
    }
}

const question1 = new Question(1, 'Berapakah hasil dari 2 * 3?', ['a. 2', ' b. 4', ' c. 6', ' d. 8'], 'c. 6');
const question2 = new Question(2, 'Berapa hasil dari 1 + 1?', ['a. 2', ' b. 4', ' c. 6', ' d. 8'], 'a. 2');
const question3 = new Question(3, 'Kapan hari pancasila?', ['a. 1 Juni', ' b. 22 Desember', ' c. 28 Oktober', ' d. 1 Januari'], 'a. 1 Juni');
const question4 = new Question(4, 'Berapa hasil dari perhitungan 6 / 3?', ['a. 2', ' b. 4', ' c. 6', ' d. 8'], 'a. 2');
const question5 = new Question(5, '10 + 1?', ['a. 22', ' b. 11', ' c. 21', ' d. 1'], 'b. 11');
const question6 = new Question(6, '3 * 3?', ['a. 2', ' b. 4', ' c. 9', ' d. 19'], 'c. 9');
const question7 = new Question(7, '18 - 17?', ['a. 1', ' b. 2', ' c. 3', ' d. 4'], 'a. 1');
const question8 = new Question(8, 'Singkatan dari apa HTML?', ['a. HyperText Mobile Language', ' b. HiperText Mockup Language', ' c. HyperText Markup Language', ' d. HiperText Markup Language'], 'c. HyperText Markup Language');
const question9 = new Question(9, '100 - 100?', ['a. 92', ' b. 99', ' c. 0', ' d. 3'], 'c. 0');
const question10 = new Question(10, '2 + 3?', ['a. 1', ' b. 5', ' c. 10', ' d. 15'], 'b. 5');

const qc = [question1.correct(), question2.correct(), question3.correct(), question4.correct(), question5.correct(), question6.correct(), question7.correct(), question8.correct(), question9.correct(), question10.correct()]

// Inputan Jawaban yang Diisi
class Answer_user {
    constructor(no_soal, answer_input) {
        this.no_soal = no_soal;
        this.answer_input = answer_input;
    }

    answer() {
        const ans = this.answer_input
        return ans
    }
}

const answer1 = new Answer_user(1, 'c. 6');
const answer2 = new Answer_user(2, 'b. 4');
const answer3 = new Answer_user(3, 'a. 1 Juni');
const answer4 = new Answer_user(4, 'a. 2');
const answer5 = new Answer_user(5, 'b. 11');
const answer6 = new Answer_user(6, 'c. 9');
const answer7 = new Answer_user(7, 'a. 1');
const answer8 = new Answer_user(8, 'c. HyperText Markup Language');
const answer9 = new Answer_user(9, 'c. 0');
const answer10 = new Answer_user(10, 'b. 5');

const awr = [answer1.answer(), answer2.answer(), answer3.answer(), answer4.answer(), answer5.answer(), answer6.answer(), answer7.answer(), answer8.answer(), answer9.answer(), answer10.answer()]

// Poin Default
let correct_question = 0
let wrong_question = 0

// Function QuizProgram
const quiz = () => {
    console.log("Nama : " + nama)
    console.log("Jurusan : " + jurusan + "\n")

    // Cek Jawaban Benar atau Tidak
    for (r = 0; r < awr.length; r++) {
        if (qc[r] == awr[r]) {
            correct_question++
        } else {
            wrong_question++
        }
    }

    // Tampil Soal dan Tampil Jawaban
    question1.tampil_question()
    console.log('Jawaban: ' + answer1.answer())
    console.log('\n')

    question2.tampil_question()
    console.log('Jawaban: ' + answer2.answer())
    console.log('\n')

    question3.tampil_question()
    console.log('Jawaban: ' + answer3.answer())
    console.log('\n')

    question4.tampil_question()
    console.log('Jawaban: ' + answer4.answer())
    console.log('\n')

    question5.tampil_question()
    console.log('Jawaban: ' + answer5.answer())
    console.log('\n')

    question6.tampil_question()
    console.log('Jawaban: ' + answer6.answer())
    console.log('\n')

    question7.tampil_question()
    console.log('Jawaban: ' + answer7.answer())
    console.log('\n')

    question8.tampil_question()
    console.log('Jawaban: ' + answer8.answer())
    console.log('\n')

    question9.tampil_question()
    console.log('Jawaban: ' + answer9.answer())
    console.log('\n')

    question10.tampil_question()
    console.log('Jawaban: ' + answer10.answer())
    console.log('\n')

    // Tampil Deskripsi
    console.log('Terima kasih ' + nama.substring(0, 4) + " telah mengikuti Quiz.")
    console.log('Dengan total jawaban benar: ' + correct_question + ' jawaban, dan')
    console.log('Total jawaban salah: ' + wrong_question + ' jawaban')
    console.log('\n')

    // Nilai Hasil
    const hasil = correct_question * 10
    console.log('Nilai yang diperoleh: ' + hasil)
}

// Tampil hasil
quiz()