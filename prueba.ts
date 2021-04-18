import Kuik from './kuik';

class Prueba {
    kuik = new Kuik();

    funtionali() {
        this.kuik.stadistics.averageOf([1,2,3,4,5,5,6,7]);
        this.kuik.stadistics.averageOf([1,2,3,4,5,5,6,7], true);
        this.kuik.stadistics.sumatoryOf([3,67.7,45,623,67,23,8.8,86]);
        
    }
}