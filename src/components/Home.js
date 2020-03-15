import React from "react";
import HomeContent from "./HomeContent";
import Heading from "./Heading";

const Home = () => {

    return (
        <React.Fragment>
            <Heading content="Home" />
            <HomeContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed ante sed justo vestibulum finibus non a quam.
                    Mauris urna nunc, pellentesque nec tempor non, pellentesque nec enim. Ut eu elementum orci.
                    Vestibulum est neque, facilisis eget velit sed, feugiat aliquam tortor. Integer et posuere nunc, ac vestibulum lectus.
                    Phasellus sem est, porta sit amet auctor in, mollis ut lectus. Nam euismod justo sem, in tempor ante tempor non.
                    Phasellus eget nulla posuere, blandit tellus et, mattis nisl.
                </p>
                <p>
                    Nam mattis nisi a augue semper, sit amet hendrerit augue mattis.
                    Proin lacinia, sem ut pharetra tempus, dolor massa placerat diam, sit amet efficitur sem odio in nisi.
                    Aenean non eros vehicula, tincidunt ipsum sed, lacinia leo. Phasellus at laoreet arcu, at fermentum risus.
                    Mauris et vestibulum urna. Cras a dolor sollicitudin, cursus est non, lobortis velit.
                    Nullam ultrices quam sed fringilla dignissim. Morbi sed luctus tellus, eget tempus tortor.
                    In nec libero feugiat, ullamcorper quam sed, finibus ligula. Praesent pellentesque velit lacus, vel congue mi dapibus sit amet.
                    Maecenas rutrum turpis metus, at posuere ligula semper vel. Vestibulum in ex nec ex interdum tristique non ut quam.
                </p>
                <p>
                    Donec ut arcu faucibus, dictum lectus in, tempus neque.
                    Fusce vel nisi a odio semper cursus. Etiam elit justo, interdum eget molestie ut, maximus in orci.
                    Etiam maximus, leo vitae interdum iaculis, erat turpis mollis velit, et consectetur magna ante id lorem.
                    Vivamus dignissim ipsum nec massa blandit, nec faucibus metus fringilla. Pellentesque et efficitur nibh.
                    Donec pretium lectus eu mauris aliquam, ut iaculis turpis dignissim. Vestibulum non fermentum neque, vel iaculis nulla.
                    Ut nunc felis, rutrum vitae massa at, vehicula posuere eros. Ut consectetur turpis at massa posuere, eu convallis eros aliquet.
                    Vestibulum ac feugiat lectus, ac tempus magna. Etiam sed velit ut turpis eleifend mattis quis vel arcu. Suspendisse potenti.
                    Nulla erat nisi, hendrerit eget fermentum vitae, mattis et sapien.
                </p>
            </HomeContent>
        </React.Fragment>
    );
};

export default Home;